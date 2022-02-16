import expressAsyncHandler from 'express-async-handler';
import passport from 'passport';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import Teacher from '../models/teacherModel.js';
import dotenv from 'dotenv';
import Student from '../models/studentModel.js';
dotenv.config();
/**@TODO I need to log in the user right away . ? Make the decision later on . */
export const registerUser = expressAsyncHandler(async (req, res, next) => { 
  const user = req.body;
 
  if (user.role === 'admin') {
    res.send('You are not allowed to register as Admin Directly');
    return;
  }

  const data = await User.create(user);
  if (data.role == 'teacher') {
    //create a teacher document right now .
    const teacher = await Teacher.create({ userId: data._id });
  }
   if(req.body.role=='student') { 
    //create the user and also create student document on the fly 
    const student = await Student.create({userId: data._id,teacherIds: [req.user._id]}); 
    const teacher = await Teacher.findOneAndUpdate({userId:req.user._id},{
      $push: { 
        studentIds: student.userId
      }
    },{
      new: true
    }); 
  }
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
      return res.json({ token });
    });
  })(req, res);
});
