import mongoose from 'mongoose';

const syllabusSchema = mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Syllabus must have a description'],
  },
  subjectId: {
    type: mongoose.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  /**@TODO need to fix this date time issue */
  startingDate: {
    type: Date,
    default: Date.now(),
  },
});

const routineSchema = mongoose.Schema({
  subjectId: {
    type: mongoose.Types.ObjectId,
    ref: 'Subject',
  },
  classDate: {
    type: Date,
  },
  startTime: {
    type: String,
  },
});

const batchSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Batch Must Have a name'],
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
    required: [true, 'Batch Must be created by a Teacher'],
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
  routines: [routineSchema],
  syllabus: [syllabusSchema],

  /**@TODO - think more about payments and monthly payments  */
  monthlyPayments: [
    {
      type: String,
    },
  ],
  fees: {
    type: Number,
    required: [true, 'Batch Must Have some Fees'],
  },
});

const Batch = mongoose.model('Batch', batchSchema);
export default Batch;
