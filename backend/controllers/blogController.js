const Blog = require("../models/Blog");

// Get all blogs
exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

// Get blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create blog
exports.createBlog = async (req, res) => {
  try {
    const { title, author, date, content, tags } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const blog = new Blog({
      title,
      author,
      date,
      content,
      tags: tags.split(",").map(tag => tag.trim()),
      image
    });

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add comment
exports.addComment = async (req, res) => {
  const { text } = req.body;
  const blog = await Blog.findById(req.params.id);
  blog.comments.push({ text });
  await blog.save();
  res.json(blog);
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
};
