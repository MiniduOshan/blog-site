import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "",
    image: null,
    content: "",
    tags: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("author", form.author);
    formData.append("date", form.date);
    formData.append("content", form.content);
    formData.append("tags", form.tags.split(",").map(tag => tag.trim()));
    if (form.image) formData.append("image", form.image);

    await axios.post("http://localhost:5000/api/blogs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl border border-gray-200">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          &larr; Back
        </button>

        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Create New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div className="relative">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 pl-2 text-gray-900"
              required
            />
            <label className="absolute left-2 -top-3.5 text-gray-500 text-sm transition-all
              peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Title
            </label>
          </div>

          {/* Author */}
          <div className="relative">
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 pl-2 text-gray-900"
              required
            />
            <label className="absolute left-2 -top-3.5 text-gray-500 text-sm transition-all
              peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Author
            </label>
          </div>

          {/* Date */}
          <div className="relative">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 pl-2 text-gray-900"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-2 text-gray-600 font-medium">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-gray-700 border border-gray-300 rounded-lg p-2 cursor-pointer hover:border-blue-400 transition"
            />
          </div>

          {/* Content */}
          <div className="relative">
            <textarea
              name="content"
              rows={6}
              value={form.content}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 pl-2 text-gray-900 resize-none"
              required
            />
            <label className="absolute left-2 -top-3.5 text-gray-500 text-sm transition-all
              peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Content
            </label>
          </div>

          {/* Tags */}
          <div className="relative">
            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 pl-2 text-gray-900"
            />
            <label className="absolute left-2 -top-3.5 text-gray-500 text-sm transition-all
              peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Tags
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
          >
            Publish Blog
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddBlog;
