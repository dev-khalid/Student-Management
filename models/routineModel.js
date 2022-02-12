import mongoose from 'mongoose';
/**@Todo NEED TO think about this schema design again . I think this schema has some redundant fields.  */
const routineSchema = mongoose.Schema({
  batchId: {
    type: ObjectId,
    ref: 'Batch',
  },
  classDate: {
    type: Date,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  teacherId: {
    type: ObjectId,
    ref: 'Teacher',
  },
});

const Routine = mongoose.model('Routine', routineSchema);
export default Routine;
