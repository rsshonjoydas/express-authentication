import dayjs from 'dayjs';
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface UserInterface extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
  role: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserModelInterface extends Model<UserInterface> {}

const userSchema: Schema<UserInterface> = new mongoose.Schema<UserInterface>(
  {
    firstName: {
      type: String,
      required: [true, 'Please enter your name!'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Please enter your name!'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter your email!'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter your password!'],
    },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/dmgbtukr2/image/upload/v1639842564/icons/profile_vnnjco.png',
    },
    role: {
      type: Number,
      default: 0, // ? 0 = user, 1 = admin
    },
    createdAt: {
      type: String,
      default: dayjs().format('DD MMMM YYYY, hh:mm:ss A'),
    },
    updatedAt: {
      type: String,
      default: dayjs().format('DD MMMM YYYY, hh:mm:ss A'),
    },
  },
  {
    timestamps: true,
  }
);

const User: UserModelInterface = mongoose.model<UserInterface, UserModelInterface>(
  'User',
  userSchema
);

export default User;
