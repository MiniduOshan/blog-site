const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { getBlogs, getBlogById, createBlog, addComment, deleteBlog } = require("../controllers/blogController");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Routes
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", upload.single("image"), createBlog);
router.post("/:id/comments", addComment);
router.delete("/:id", deleteBlog);

module.exports = router;
