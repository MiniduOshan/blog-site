import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { dummyData } from "../components/data";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setPosts(res.data);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:5000/api/blogs/${id}`);
        setPosts(posts.filter((post) => post._id !== id));
      } catch (err) {
        alert("Failed to delete. Try again.");
      }
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading blogs...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <header className="w-full flex flex-col items-center pt-10 mb-10 px-4 text-center">
        <img src={dummyData.user.profilePic} alt="Logo" className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover transition-transform duration-300 hover:scale-105" />
        <h1 className="text-4xl font-bold text-gray-800">My Blog</h1>
        <p className="text-gray-600 mt-2 max-w-xl">
          A place to share my thoughts and ideas with the world
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {posts.map((post) => (
          <Link
            key={post._id}
            to={`/blog/${post._id}`}
            className="group bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl relative"
          >
            <div className="p-4 flex flex-col justify-between h-64">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  {new Date(post.date).toLocaleDateString()} • {post.tags.join(", ")}
                </p>
                <p className="text-gray-700">{post.content}</p>
              </div>

              <button
                onClick={(e) => handleDelete(e, post._id)}
                className="absolute top-3 right-3 text-blue-600 hover:text-red-600 bg-white rounded-full p-2 shadow"
              >
                <FaTrash />
              </button>
            </div>
          </Link>
        ))}

        <Link
          to="/add"
          className="bg-white rounded-xl shadow-md flex flex-col justify-center items-center cursor-pointer hover:shadow-lg transition p-6 h-64 transform hover:scale-105"
        >
          <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 text-center">
            Add a New Blog
          </h3>
        </Link>
      </main>
    </div>
  );
}

export default Home;
