import expressAsyncHandler from 'express-async-handler';
import Teacher from '../models/teacherModel.js';
import Batch from '../models/batchModel.js';
import Subject from '../models/subjectModel.js';
import Exam from '../models/examModel.js';
import Student from '../models/studentModel.js';
import mongoose from 'mongoose';

/**
 * @ROUTE post - /api/teacher/createbatch
 * @Request {name,batchId}
 */

export const createBatch = expressAsyncHandler(async (req, res) => {
  const data = req.body;
  data.teacherId = req.user._id;
  const batch = await Batch.create(data);
  //keeping batchId inside teacher Object.

  const teacher = await Teacher.findOneAndUpdate(
    { userId: req.user._id },
    {
      $push: {
        batchIds: batch._id,
      },
    },
    {
      new: true,
    }
  );
  res.status(201).json(batch);
});

/**
 * @ROUTE post - /api/teacher/createsubject
 * @Request {name,batchId}
 */

export const createSubject = expressAsyncHandler(async (req, res) => {
  /**@TODO Later on i will check , the person sending batch id belongs to him or not. And batch ta exist kore kina check kora lagbe .  */
  const data = await Subject.create(req.body);

  //updating the teacher subjects
  const teacher = await Teacher.findOneAndUpdate(
    { userId: req.user._id },
    {
      $push: {
        subjectIds: data._id,
      },
    },
    {
      new: true,
    }
  );

  //keeping the subjectId inside batch
  const batch = await Batch.findByIdAndUpdate(req.body.batchId, {
    $push: {
      subjectIds: data._id,
    },
  });

  res.status(201).json(data);
});

/**
 * @ROUTE post - /api/teacher/createexam
 * @Request body - {mark,startTime,endTime,examDate,publishDate}
 */

export const createExam = expressAsyncHandler(async (req, res) => {
  const data = req.body;
  const { studentIds } = await Batch.findById(req.body.batchId);
  const formatParticipants = studentIds.map((item) => {
    return {
      studentId: item,
      mark: 0,
    };
  });

  data.participants = formatParticipants;
  data.teacherId = req.user._id;

  const exam = await Exam.create(data);
  const batch = await Batch.findByIdAndUpdate(req.body.batchId, {
    $push: {
      examIds: exam._id,
    },
  });

  res.status(201).json(exam);
});

/**
 * @TODO - Need to take care of this route as the application grows.
 */
export const createRoutine = expressAsyncHandler(async (req, res) => {
  const batch = await Batch.findByIdAndUpdate(
    req.params.batchId,
    {
      $push: {
        routines: req.body,
      },
    },
    { new: true }
  );
  res.status(200).send('Routine Addedd Successfully');
});

/**
 * @TODO - Need to take care of this route as the application grows.
 */

export const createSyllabus = expressAsyncHandler(async (req, res) => {
  const batch = await Batch.findByIdAndUpdate(
    req.params.batchId,
    {
      $push: {
        syllabus: req.body,
      },
    },
    { new: true }
  );
  res.status(200).send('Syllabus Add Successfully');
});

/**
 * @ROUTE get - /api/teacher/allbatch
 */
export const getAllBatch = expressAsyncHandler(async (req, res) => {
  const data = await Batch.find({ teacherId: req.user._id })
    .populate('subjectIds', 'name')
    .populate('examIds');
  res.json(data);
});


/**
 * @ROUTE patch - /api/teacher/addstudenttobatch
 * @Request body - {studentId,batchId}
 */

export const addStudentToBatch = expressAsyncHandler(async (req, res) => {
  const data = req.body;
  const batch = await Batch.findByIdAndUpdate(
    req.body.batchId,
    {
      $push: {
        studentIds: req.body.studentId,
      },
    },
    {
      new: true,
    }
  );

  const student = await Student.findByIdAndUpdate(
    req.body.studentId,
    {
      $push: {
        batchIds: batch._id,
        subjectIds: batch.subjectIds,
      },
    },
    {
      new: true,
    }
  );
  res.status(201).json(batch);
});

/**
 * @ROUTE get - /api/teacher/allstudents
 */

export const getAllStudent = expressAsyncHandler(async (req, res) => {
  const students = await Student.find({ teacherIds: req.user._id }).populate(
    'userId',
    '-password -__v -_id'
  );
  res.json(students);
});

/**
 * @ROUTE patch - /api/teacher/publishresult
 * @Request body - {participants: [{studentId: 'something' , mark: 50}]}
 */
export const publishResult = expressAsyncHandler(async (req, res) => {
  //i need to to sort the result here . right away .
  // const result = await Exam.findByIdAndUpdate(
  //   req.body.examId,
  //   {
  //     //here i am replacing all the participants . this is not the right way to complete this one .
  //     participants: req.body.participants,
  //   },
  //   {
  //     new: true,
  //   }
  // );

  const result = await Exam.find();
  result.participants.forEach((participant) => {
    req.body.participants.forEach((student) => {
      if (student.studnetId === participant.studentId)
        participant.mark = student.mark;
    });
  });
  //this should update the result
  result.save();
  res.json(result);
});
