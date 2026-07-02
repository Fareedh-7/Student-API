const mongoose = require("mongoose");

const courseSchema = new mongoose.model(
  {
    title: String,
    instructor: String,
    duration: Number,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Course", courseSchema);
