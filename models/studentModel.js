import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    required: ['User Id is required'],
  },
  teacherIds: [
    {
      type: ObjectId,
      ref: 'Teacher',
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

  guardianNubmer: {
    type: String,
  },
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
