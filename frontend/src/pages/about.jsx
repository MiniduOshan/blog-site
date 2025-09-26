import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About This Blog</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Discover the story behind this blog, its purpose, and the person who
          created it.
        </p>
      </div>


      {/* Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-12">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To share ideas, stories, and insights on technology, creativity, and
            life experiences that inspire readers to grow and explore.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Why This Blog?</h3>
          <p className="text-gray-600">
            This blog was started to create a space for learning, reflection, and
            open conversations with people who share the same passion for
            knowledge and exploration.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Stay Connected</h3>
          <p className="text-gray-600">
            Have questions or ideas to share? Feel free to connect through the
            Contact page. Let's build a community of curious minds together!
          </p>
        </div>
      </div>

      {/* Closing Message */}
      <div className="bg-gray-100 py-10 text-center">
        <p className="text-lg text-gray-700 font-medium">
          ✨ Thank you for visiting! Keep exploring, keep learning. ✨
        </p>
      </div>
    </div>
  );
}

export default About;
