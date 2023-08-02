import { Schema, model, models } from 'mongoose';
import validator from 'validator'

const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: [true, "Username already exists"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Account already exists"],
      validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Must be at least 6 characters long"],
      select: false, //don't send password
    },

  },
  { timestamps: true }
);

const User = models.User || model('User', UserSchema);

export default User;

