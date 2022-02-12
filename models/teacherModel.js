import mongoose from 'mongoose';

const teacherSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    required: ['User Id is required'],
  },
  studentIds: [
    {
      type: ObjectId,
      ref: 'Student',
    },
  ],
  batchIds: [
    {
      type: ObjectId,
      ref: 'Batch',
    },
  ],
  subjectIds: [
    {
      type: ObjectId,
      ref: 'Subject',
    },
  ],
  examIds: [
    {
      type: ObjectId,
      ref: 'Exam',
    },
  ],

  /**@TODO - think more about payments and monthly payments  */
  monthlyPayments: [
    {
      type: String,
    },
  ],
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
