import express from 'express';
import passport from 'passport';
import {
  addStudentToBatch,
  batchInfo,
  createBatch,
  createExam,
  createRoutine,
  createSubject,
  createSyllabus,
  examInfo,
  getAllBatch,
  getAllStudent,
  publishResult,
} from '../controllers/teacherController.js';
import { registerUser } from '../controllers/userController.js';
const router = express.Router();

//teacher notun kore r register kora lagbe na just teache tar profile update kora lagbe .

router.use(passport.authenticate('jwt', { session: false }));
router.post('/createbatch', createBatch);
router.post('/createsubject', createSubject);
router.patch('/createroutine/:batchId', createRoutine);
router.patch('/createsyllabus/:batchId', createSyllabus);
router.post('/createexam', createExam);
router.get('/allbatch', getAllBatch);
router.post('/createstudent', registerUser);
router.get('/allstudents', getAllStudent);
router.patch('/addstudenttobatch', addStudentToBatch);
router.patch('/publishresult', publishResult);
router.get('/batchinfo/:batchId', batchInfo);
router.get('/allexams/:batchId/:from?/:to?',examInfo);//ekta certain range a koyta exam hoiche seita check korar jonne ei route

export default router;
