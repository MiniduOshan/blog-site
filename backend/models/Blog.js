const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  image: String, // stores filename
  content: String,
  tags: [String],
  comments: [
    {
      text: String,
      createdAt: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model("Blog", blogSchema);
