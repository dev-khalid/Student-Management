import expressAsyncHandler from 'express-async-handler';
import passport from 'passport';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
/**@TODO I need to log in the user right away . ? Make the decision later on . */
export const registerUser = expressAsyncHandler(async (req, res, next) => {
  const user = req.body;
  if (user.role === 'admin') {
    res.send('You are not allowed to register as Admin Directly');
    return;
  }
  const data = await User.create(user);
  res.status(201).json(data);
});

export const loginUser = expressAsyncHandler(async (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something went wrong',
        error: err,
        user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }  
      const token = jwt.sign({ ...user }._doc, process.env.JWT_SECRET);   
      return res.json({ user, token });
    });
  })(req, res);
});
