import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const addComment = async () => {
    if (!comment) return;
    const res = await axios.post(
      `http://localhost:5000/api/blogs/${id}/comments`,
      { text: comment }
    );
    setBlog(res.data);
    setComment("");
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-500">{blog.author} • {blog.date}</p>

      {/* Fixed image URL */}
      {blog.image && (
        <img
          src={`http://localhost:5000/uploads/${blog.image}`}
          alt={blog.title}
          className="w-full mt-4 rounded"
        />
      )}

      <p className="mt-4">{blog.content}</p>
      <p className="text-sm text-gray-500 mt-2">Tags: {blog.tags.join(", ")}</p>

      {/* Comments */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Comments</h3>
        <ul className="mt-2 space-y-2">
          {blog.comments.map((c, i) => (
            <li key={i} className="bg-gray-100 p-2 rounded">
              {c.text}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border p-2 rounded-l"
          />
          <button
            onClick={addComment}
            className="bg-blue-600 text-white px-4 rounded-r"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
