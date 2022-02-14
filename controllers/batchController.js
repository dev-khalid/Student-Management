import expressAsyncHandler from 'express-async-handler';
import Batch from '../models/batchModel.js';

export const batchInfo = expressAsyncHandler(async (req, res) => {
  const data = await Batch.findById(req.params.batchId)
    .populate({
      path: 'examIds',
    })
    .populate({ path: 'studentIds', model: 'User', select: 'name email -_id' });
  res.json(data);
});
