import expressAsyncHandler from 'express-async-handler';
import Exam from '../models/examModel.js';

//this controller can be further used for result also .
/**
 * @ROUTE get - /api/exam/examdetails/:examId
 */
export const examDetails = expressAsyncHandler(async (req, res) => {
  const data = await Exam.findById(req.params.examId)
    .populate({
      path: 'participants.studentId',
      select: '_id name email contract',
      model: 'User',
    })
    .populate('batchId'); 
  res.json(data);
});

export const examInfo = expressAsyncHandler(async (req, res) => {
  //from - to exam information should be provided.
  let filter = {};
  if (req.params.from) {
    filter = {
      $gte: new Date(req.params.from).toISOString(),
    };
  }
  if (req.params.to) {
    filter = { ...filter, $lte: new Date(req.params.to).toISOString() };
  }

  const searchObj =
    Object.keys(filter).length == 0
      ? {
          batchId: req.params.batchId,
        }
      : {
          batchId: req.params.batchId,
          examDate: filter,
        };

  const data = await Exam.find(searchObj)
    .populate({
      path: 'participants.studentId',
      select: '-_id name email',
      model: 'User',
    }) //'User'
    .populate('batchId')
    .populate('subjectId');
  res.json(data);
});
