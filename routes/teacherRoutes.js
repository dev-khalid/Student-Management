import express from 'express';
import passport from 'passport';
import {
  createBatch,
  createSubject,
  getAllBatch,
} from '../controllers/teacherController.js';
const router = express.Router();

//teacher notun kore r register kora lagbe na just teache tar profile update kora lagbe .
router.use(passport.authenticate('jwt', { session: false }));
router.post('/createbatch', createBatch);
router.post('/createsubject', createSubject);
router.get('/allbatch', getAllBatch);

export default router;
