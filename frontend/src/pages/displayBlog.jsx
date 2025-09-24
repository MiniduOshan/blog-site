import React from "react";
import { useParams, Link } from "react-router-dom";
import { dummyData } from "../components/data";

function BlogDetails() {
  const { id } = useParams();
  const post = dummyData.posts.find((p) => p.id === id);

  if (!post) {
    return <div className="text-center mt-20 text-xl">Blog not found 😢</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          {/* Title + Meta */}
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-600 text-sm mb-4">
            By {post.author} • {post.date}
          </p>

          {/* Full Content */}
          <p className="text-gray-800 leading-relaxed">{post.content}</p>

          {/* Tags */}
          <div className="mt-4 flex gap-2 flex-wrap">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Likes */}
          <div className="mt-4 text-gray-600">❤️ {post.likes} likes</div>

          {/* Comments */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Comments</h2>
            {post.comments.length > 0 ? (
              <ul className="space-y-3">
                {post.comments.map((comment) => (
                  <li key={comment.id} className="border-b pb-2">
                    <span className="font-bold">{comment.author}: </span>
                    <span>{comment.text}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>

          {/* Back Link */}
          <Link
            to="/"
            className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
