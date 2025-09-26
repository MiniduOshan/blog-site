import React from "react";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Me</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Have questions, feedback, or just want to say hello? Get in touch below!
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800">📧 Email</h3>
            <p className="text-gray-600">example@email.com</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800">📞 Phone</h3>
            <p className="text-gray-600">+94 71 234 5678</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800">📍 Location</h3>
            <p className="text-gray-600">Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="bg-gray-100 py-8 text-center">
        <p className="text-lg text-gray-700">
          ✨ I’ll get back to you as soon as possible. Thanks for reaching out! ✨
        </p>
      </div>
    </div>
  );
}

export default Contact;
