import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  userId: {
    type:  mongoose.Types.ObjectId,
    ref: 'User',
    required: ['User Id is required'],
  },
  teacherIds: [
    {
      type:  mongoose.Types.ObjectId,
      ref: 'Teacher',
    },
  ],
  batchIds: [
    {
      type:  mongoose.Types.ObjectId,
      ref: 'Batch',
    },
  ],
  subjectIds: [
    {
      type:  mongoose.Types.ObjectId,
      ref: 'Subject',
    },
  ],
  examIds: [
    {
      type:  mongoose.Types.ObjectId,
      ref: 'Exam',
    },
  ],

  /**@TODO - think more about payments and monthly payments  */
  monthlyPayments: [
    {
      type: String,
    },
  ],

  guardianNubmer: {
    type: String,
  },
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
