import express from 'express';
import passport from 'passport';
import {
  addStudentToBatch,
  createBatch,
  createExam,
  createRoutine,
  createSubject,
  createSyllabus,
  getAllBatch,
  getAllStudent,
  publishResult,
} from '../controllers/teacherController.js';
import { registerUser } from '../controllers/userController.js';
const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));

router.post('/createbatch', createBatch);
router.post('/createsubject', createSubject);
router.post('/createexam', createExam);
router.patch('/createroutine/:batchId', createRoutine);
router.patch('/createsyllabus/:batchId', createSyllabus);
router.post('/createstudent', registerUser);

router.get('/allbatch', getAllBatch);
router.get('/allstudents', getAllStudent);

router.patch('/addstudenttobatch', addStudentToBatch);
router.patch('/publishresult', publishResult);

export default router;

/**
 * @TODO
 * 1.should be able to update or edit or delete the subjects .
 *
 */
