import express from 'express';
import passport from 'passport';
import { registerUser, loginUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
//following routes will be protected .
router.use(passport.authenticate('jwt', { session: false }));

router.post('/logout', (req, res) => { 
  console.log(req.headers); 
  req.logout();
  res.send('Successfully Logged Out!');
});
router.get('/locked', (req, res) => {
  res.send('working fine');
});

export default router;
