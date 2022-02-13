import expressAsyncHandler from 'express-async-handler';
import Teacher from '../models/teacherModel.js';
import Batch from '../models/batchModel.js';
import Subject from '../models/subjectModel.js';
import Exam from '../models/examModel.js';

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
  const data = await Batch.findOne({ teacherId: req.user._id }).populate(
    'subjectIds',
    'name'
  );
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
  console.log(batch);
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
  const studentIds = await Batch.findById(req.body.batchId).select(
    'studentIds'
  );
  // console.log(studentIds);
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
