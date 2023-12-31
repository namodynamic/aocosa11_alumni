import mongoose from "mongoose";

const alumnusSchema = new mongoose.Schema({
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

const Alumnus = mongoose.models.Alumnus || mongoose.model("Alumnus", alumnusSchema);

export default Alumnus;
