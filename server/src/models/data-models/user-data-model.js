import dayjs from "dayjs";
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Please enter your username!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dmgbtukr2/image/upload/v1639842564/icons/profile_vnnjco.png",
    },
    createdAt: {
      type: String,
      default: dayjs().format("DD MMMM YYYY, hh:mm:ss A"),
    },
    updatedAt: {
      type: String,
      default: dayjs().format("DD MMMM YYYY, hh:mm:ss A"),
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
