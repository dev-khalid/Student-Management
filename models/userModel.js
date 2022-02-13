import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

/**@TODO I will validate the schema type later on with validator */
import validator from 'validator';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: ['User Must have a name'],
  },
  email: {
    type: String,
    unique: true,
    required: 'User Must have an Email',
    validate: [validator.isEmail, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: ['Please enter your password'],
    minLength: 6,
    select: false, 
    //if registerType is user-pass then we need the pass
  },
  registerType: {
    type: String,
    enum: ['emailpass', 'google'],
    default: 'emailpass',
  },
  /**@TODO I will later on use a subscription plan so i will not accept all request directly.  */
  role: {
    type: String,
    enum: ['admin', 'teacher', 'student'],
    default: 'teacher',
  },
  avatar: {
    type: String,
  },
  contract: {
    type: String,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.checkPassword = async function(candidatePassword,userPassword) { 
  return await bcrypt.compare(candidatePassword,userPassword); 
}
const User = mongoose.model('User', userSchema);
export default User;
