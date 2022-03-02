import express from 'express';
import passport from 'passport';
import {
  confirmPayment,
  createPayment,
  paymentInfo,
} from '../controllers/paymentController.js';
const router = express.Router();
router.use(passport.authenticate('jwt', { session: false }));
router.get('/:batchId/:date?', paymentInfo);
router.post('/createpayment', createPayment);
router.patch('/confirmpayment', confirmPayment);

export default router;
