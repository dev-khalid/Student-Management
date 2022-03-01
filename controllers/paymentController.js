import expressAsyncHandler from 'express-async-handler';
import Payment from '../models/paymentModel.js';
import moment from 'moment';

/**
 * @ROUTE - get - /api/payment/:batchId/:date?
 */

export const paymentInfo = expressAsyncHandler(async (req, res) => {
  let { batchId, date } = req.params;
  if (!date) date = moment(new Date()).substract(1, 'month'); //by default we will catch the previous months data
  const data = await Payment.find({
    batchId,
    $and: [
      {
        paymentOf: { $gte: moment(date).startOf('month') },
      },
      {
        paymentOf: { $lte: moment(date).startOf('month') },
      },
    ],
  });

  res.json(data);
});

/**
 * @ROUTE - post - /api/payment/createpayment
 * @TODO this should be an automatic process .
 */
