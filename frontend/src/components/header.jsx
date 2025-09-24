import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-white-600 p-1 flex justify-between'>
      <h1 className=''>
        Welcome to My Blog
      </h1>
      <div className='space-x-6'>
      <Link to="/" className='text-blue-500 hover:underline'>Home</Link>
        <Link to="/about" className='text-blue-500 hover:underline'>About</Link>
        <Link to="/contact" className='text-blue-500 hover:underline'>Contact</Link>
      </div>
    </div>
  );
}

export default Header;