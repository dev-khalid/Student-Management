import expressAsyncHandler from 'express-async-handler';
import Teacher from '../models/teacherModel.js';
import Batch from '../models/batchModel.js';
import Subject from '../models/subjectModel.js';
import Exam from '../models/examModel.js';
import Student from '../models/studentModel.js';

export const createBatch = expressAsyncHandler(async (req, res) => {
  const data = req.body;
  data.teacherId = req.user._id;
  const batch = await Batch.create(data);
  //teacher documet a ei batch id ta push kora lagbe .

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

export const createSubject = expressAsyncHandler(async (req, res) => {
  /**@TODO Later on i will check , the person sending batch id belongs to him or not. And batch ta exist kore kina check kora lagbe .  */
  const data = await Subject.create(req.body);
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
  const batch = await Batch.findByIdAndUpdate(req.body.batchId, {
    $push: {
      subjectIds: data._id,
    },
  });

  res.status(201).json(data);
});

export const getAllBatch = expressAsyncHandler(async (req, res) => {
  const data = await Batch.findOne({ teacherId: req.user._id })
    .populate('subjectIds', 'name')
    .populate('examIds');
  res.json(data);
});

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

export const createExam = expressAsyncHandler(async (req, res) => {
  const data = req.body;
  const { studentIds } = await Batch.findById(req.body.batchId);
  const formatedDateForParticipants = studentIds.map((item) => {
    return {
      studentId: item,
      mark: 0,
    };
  });

  data.participants = formatedDateForParticipants;
  data.teacherId = req.user._id;

  const exam = await Exam.create(data);
  const batch = await Batch.findByIdAndUpdate(req.body.batchId, {
    $push: {
      examIds: exam._id,
    },
  });

  res.status(201).json(exam);
});

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

export const getAllStudent = expressAsyncHandler(async (req, res) => {
  const students = await Student.find({ teacherIds: req.user._id }).populate(
    'userId',
    '-password -__v -_id'
  );
  res.json(students);
});

//i will nedd this in frontend.
export const examInfo = expressAsyncHandler(async (req, res) => {
  const data = await Exam.findById(req.params.examId);
  res.json(data);
});

export const publishResult = expressAsyncHandler(async (req, res) => {
  //then on that batch i will need to iterate through examId->participants.
  //then i have to update those results.
  const result = await Exam.findByIdAndUpdate(
    req.body.examId,
    {
      participants: req.body.participants,
    },
    {
      new: true,
    }
  );

  res.json(result);
});
