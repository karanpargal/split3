import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  walletAddress: {
    type: String,
    required: [true, "Please provide a wallet address"],
    unique: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);