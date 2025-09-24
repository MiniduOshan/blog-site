import React from 'react'
import dp from '../assets/dp.jpg'
import { dummyData } from '../components/data'

function Home() {
  return (
    <div className='bg-gray-300 min-h-screen pb-10'>
      
      {/* Profile Section */}
      <div className="w-full h-auto mb-4 mt-20 flex justify-center">
        <img 
          src={dummyData.user.profilePic} 
          alt="Blog Banner" 
          className='rounded-full border-4 border-gray-300 w-40 h-40 object-cover shadow-lg' 
        />
      </div>
      <h1 className='text-2xl font-bold text-center'>My Blog</h1>
      <h2 className='text-lg text-center mb-8'>{dummyData.user.bio}</h2>

      {/* Posts Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {dummyData.posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.date} • {post.tags.join(', ')}</p>
              <p className="text-gray-800">{post.content.slice(0, 100)}...</p>
            </div>
          </div>
        ))}
        
        {/* Placeholder for adding a new post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer">
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 text-gray-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-gray-700">Add a new blog</h3>
            <p className="text-gray-500 text-sm mt-1">Click here to create a new post</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home