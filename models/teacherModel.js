import mongoose from 'mongoose';

const teacherSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: ['User Id is required'],
  },
  studentIds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Student',
    },
  ],
  batchIds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Batch',
    },
  ],
  subjectIds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Subject',
    },
  ],
  examIds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Exam',
    },
  ],

  /**@TODO - think more about payments and monthly payments  */
  monthlyPayments: [
    {
      type: Boolean,
      //I think this should go in another schema .
    },
  ],
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
