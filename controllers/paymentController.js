import expressAsyncHandler from 'express-async-handler';
import Payment from '../models/paymentModel.js';
import moment from 'moment';
import Batch from '../models/batchModel.js';
/**
 * @ROUTE - get - /api/payment/:batchId/:date?
 */
export const paymentInfo = expressAsyncHandler(async (req, res) => {
  let { batchId, date } = req.params;
  if (!date)
    date = moment(new Date()).utcOffset('+6:00').subtract(1, 'month').format(); //by default we will catch the previous months data
  const data = await Payment.find({
    batchId,
    $and: [
      {
        paymentOf: { $gte: moment(date).startOf('month') },
      },
      {
        paymentOf: { $lte: moment(date).endOf('month') },
      },
    ],
  });

  res.json(data);
});

/**
 * @ROUTE - post - /api/payment/createpayment
 * @REQUEST - body - {batchId,teacherId,paymentOf}
 * @TODO this should be an automatic process .this should be a scheduled job . where i will exicute the job every day
 * BUT for now i will keep a button on frontend so that teacher can create their own payment checker for last month.
 */

export const createPayment = expressAsyncHandler(async (req, res) => {
  const teacherId = req.user._id;

  let { batchId, paymentOf } = req.body;
  if (!paymentOf) {
    paymentOf = moment(new Date()).subtract(1, 'month').endOf('month').format();
  } else {
    paymentOf = moment(paymentOf).subtract(1, 'month').endOf('month').format();
  }

  const { studentIds: batchStudents } = await Batch.findById(batchId);
  let formatedData = [];
  batchStudents.forEach((student) => {
    formatedData.push({
      studentId: student,
      batchId,
      teacherId,
      paymentOf,
    });
  });
  const data = await Payment.insertMany(formatedData);
  res.json(data);

  //payment id should be stored inside student model and teacher model .also .
  //first we need to check if there is no data for last month if no data exists then i need to create data for last month immediately .

  //res.send('Here we will create payment automatically on each months startting')
});

/**
 * @ROUTE - patch - /api/payment/confirmpayment
 * @REQUEST - body - {batchId,studentId,paymentOf,paidAt}
 */

export const confirmPayment = expressAsyncHandler(async (req, res) => {
  let { batchId, studentId, paymentOf, paidAt } = req.body;
  let lastMonth = moment().subtract(1, 'M').format();
  paymentOf = moment(paymentOf || lastMonth)
    .utcOffset('+6:00')
    .endOf('M')
    .format();
  paidAt = moment(paidAt || new Date())
    .utcOffset('+6:00')
    .format();
  console.log(paymentOf, paidAt);
  const data = await Payment.findOneAndUpdate(
    { batchId, studentId, paymentOf },
    { paidAt },
    { new: true }
  );
  res.json(data);
});
