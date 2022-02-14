import express from 'express';
import passport from 'passport';
import { examDetails, examInfo } from '../controllers/examController.js';
const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));
//Now following routes are protected.
router.get('/examdetails/:examId', examDetails);
router.get('/allexams/:batchId/:from?/:to?', examInfo);

export default router;
