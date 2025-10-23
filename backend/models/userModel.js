import mongoose from "mongoose";

const userSChema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("User", userSChema);

export default Users;
