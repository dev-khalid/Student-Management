import mongoose from 'mongoose';
const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: ['Subject must have a name'],
  },
  batchId: {
    type: mongoose.Types.ObjectId,
    ref: 'Batch',
  },
});

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;
