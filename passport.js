import passport from 'passport';
import LocalStrategy from 'passport-local/lib/strategy.js';
import expressAsyncHandler from 'express-async-handler';
import User from './models/userModel.js';
import JWTStrategy from 'passport-jwt/lib/strategy.js';
import passportJWT from 'passport-jwt';
const ExtractJWT = passportJWT.ExtractJwt;
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.JWT_SECRET);
passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    expressAsyncHandler(async function (email, password, cb) {
      const user = await User.findOne({ email }).select('+password');
      if (!user || !(await user.checkPassword(password, user.password))) {
        return cb(null, false, { message: 'Incorrect email or password' });
      } else {
        return cb(null, user, { message: 'Logged In SuccessFully!' });
      }
    })
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    expressAsyncHandler(async function (jwt_payload, cb) { 
      const user = await User.findById(jwt_payload._id);
      if (!user) {
        return cb(null, { message: 'User not found' });
      } else {
        return cb(null, user);
      }
    })
  )
);
