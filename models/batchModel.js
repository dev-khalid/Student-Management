import mongoose from 'mongoose';

const batchSchema = mongoose.Schema({
  name: {
    types: String,
    required: ['Batch Must Have a name'],
  },
  studentIds: [
    {
      type: ObjectId,
      ref: 'Student',
    },
  ],
  teacherIds: {
    type: ObjectId,
    ref: 'Teacher',
  },

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
  routineIds: [
    {
      type: ObjectId,
      ref: 'Routine',
    },
  ],
  syllabusIds: [
    {
      type: ObjectId,
      ref: 'Syllabus',
    },
  ],

  /**@TODO - think more about payments and monthly payments  */
  monthlyPayments: [
    {
      type: String,
    },
  ],
  fees: {
    type: Number,
    required: ['Batch Must Have some Fees'],
  },
});

const Batch = mongoose.model('Batch', batchSchema);
export default Batch;
