import mongooose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = mongooose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  }
);

mongooose.models = {}

const User = mongooose.model("User", userSchema);
export default User;
