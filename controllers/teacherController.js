import expressAsyncHandler from 'express-async-handler';
import Teacher from '../models/teacherModel.js';
import Batch from '../models/batchModel.js';
import Subject from '../models/subjectModel.js';

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
