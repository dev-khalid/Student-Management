import mongoose from 'mongoose';

const examSchema = mongoose.Schema({
  teacherId: {
    type: mongoose.Types.ObjectId,
    ref: 'Teacher',
  },

  subjectId: {
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
  //by default all students should be added to this participants list from selected batch
  participants: [
    {
      studentId: { 
        type: mongoose.Types.ObjectId,
        ref: 'Student',
      },
      mark: {
        type: Number,
        default: 0,
      },
    },
  ],
  /**@TODO need to fix all of the date time issue  */
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  publishDate: {
    type: Date,
  },
});

const Exam = mongoose.model('Exam', examSchema);
export default Exam;
