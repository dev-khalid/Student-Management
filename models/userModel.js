import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: ['User Must have a name'],
  },
  email: {
    type: String,
    unique: true,
    required: ['User Must have an Email'],
  },
  password: {
    type: String,
    //if registerType is user-pass then we need the pass
  },
  registerType: {
    type: String,
    enum: ['emailpass', 'google'],
    default: 'emailpass',
  },
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

const User = mongoose.model('User', userSchema);
export default User;
