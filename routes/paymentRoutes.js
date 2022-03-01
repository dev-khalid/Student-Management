import express from 'express';
import passport from 'passport';

const router = express.Router();
router.use(passport.authenticate('jwt', { session: false }));
router.get('/:batchId/:date?');
router.post('/createpayment');
router.patch('/confirmpayment');

export default router;
