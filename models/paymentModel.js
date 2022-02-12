import mongoose from 'mongoose';
const paymentSchema = mongoose.Schema({
  amountPaid: {
    type: Number,
    default: 0,
  },
  paymentOf: {
    type: Date,
  },
  paidAt: {
    type: Date,
  },
  batchId: {
    type: ObjectId,
    ref: 'Batch',
  },
  teacherId: {
    type: ObjectId,
    ref: 'Teacher',
  },
  studentId: {
    type: ObjectId,
    ref: 'Student',
  },
});

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
