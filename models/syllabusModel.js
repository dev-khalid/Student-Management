import mongoose from 'mongoose';

const syllabusSchema = mongoose.Schema({
  description: {
    type: String,
    required: ['Syllabus must have a description'],
    subjectId: {
      type: mongoose.Types.ObjectId,
      ref: 'Subject',
    },
    /**@TODO need to fix this date time issue */
    startingDate: {
      type: Date,
      default: Date.now(),
    },
  },
});

const Syllabus = mongoose.model('Syllabus', syllabusSchema);
export default Syllabus;
