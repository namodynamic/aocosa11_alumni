import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema({
  id: { type: "String", required: true },
  name: { type: "String", required: true },
  email: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
  bio: String,
  occupation: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
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

const Alumni = mongoose.models.Alumni || mongoose.model("Alumni", alumniSchema);

export default Alumni;
