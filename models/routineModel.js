import mongoose from 'mongoose'; 

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
});

const Routine = mongoose.model('Routine', routineSchema);
export default Routine;
