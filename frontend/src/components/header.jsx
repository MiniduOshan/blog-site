import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-gray-800">
          My Blog
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-6 mr-5">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
