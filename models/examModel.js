import mongoose from 'mongoose';

const examSchema = mongoose.Schema({
  examDate: {
    type: Date,
    required: [true, 'Exam must have a date'],
  },
  teacherId: {
    type: mongoose.Types.ObjectId,
    ref: 'Teacher',
  },
  subjectName: {
    type: String,
    required: true,
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
