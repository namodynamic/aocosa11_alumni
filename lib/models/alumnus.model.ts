import mongoose from "mongoose";

const alumnusSchema = new mongoose.Schema({
  id: { type: "String", required: true },
  username: { type: "String", required: true ,unique: true},
  name: { type: "String", required: true },
  image: String,
  bio: String,
  occupation: String,
  birthday: { type: Date },
  location: String,
  linkedin: String,
  twitter: String,
  facebook: String,
  instagram: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", alumnusSchema, "users");

export default User;
