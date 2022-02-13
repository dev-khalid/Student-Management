import mongoose from 'mongoose';

const examSchema = mongoose.Schema({
  teacherIds: {
    type: mongoose.Types.ObjectId,
    ref: 'Teacher',
  },

  subjectIds: {
    type: mongoose.Types.ObjectId,
    ref: 'Subject',
  },
  batchId: {
    type: mongoose.Types.ObjectId,
    ref: 'Batch',
  },
  totalMark: {
    type: Number,
    required: ['Exam Must Have some numbers'],
  },
  participants: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Student',
      mark: {
        type: Number,
        default: 0,
      },
    },
  ],
  /**@TODO need to fix all of the date time issue  */
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  publishDate: {
    type: Date,
  },
});

const Exam = mongoose.model('Exam', examSchema);
export default Exam;
