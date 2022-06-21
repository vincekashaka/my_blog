import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add your name'],
    },
    username: {
      type: String,
      required: [true, 'Please add your username'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add your password'],
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model('user', userSchema);

export default user;
