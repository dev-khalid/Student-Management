import mongoose from 'mongoose';

const batchSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true,'Batch Must Have a name'],
  },
  studentIds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Student',
    },
  ],
  teacherId: {
    type: mongoose.Types.ObjectId,
    ref: 'Teacher',
    required: [true,'Batch Must be created by a Teacher'],
  },

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
  routineIds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Routine',
    },
  ],
  syllabusIds: [
    {
      type: mongoose.Types.ObjectId,
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
    required: [true,'Batch Must Have some Fees']
  },
});

const Batch = mongoose.model('Batch', batchSchema);
export default Batch;
