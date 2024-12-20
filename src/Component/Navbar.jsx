import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
    {/* Logo Section */}
    <div className="text-2xl font-bold text-blue-600">logo</div>
    
    {/* Search Section */}
    <div className="flex items-center space-x-2">
      <input 
        type="text" 
        placeholder="Search..." 
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
        Search
      </button>
    </div>
    
    {/* Navigation Links */}
    <ul className="flex space-x-4">
      <li>
        <Link
          to="./" 
          className="text-gray-800 hover:text-blue-500 transition duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="./Cart" 
          className="text-gray-800 hover:text-blue-500 transition duration-300"
        >
          Cart
        </Link>
      </li>
      <li>
        <Link 
          to="./Products" 
          className="text-gray-800 hover:text-blue-500 transition duration-300"
        >
          Products
        </Link>
      </li>
      <li>
        <Link 
          to="./Login" 
          className="text-gray-800 hover:text-blue-500 transition duration-300"
        >
          Login
        </Link>
      </li>
    </ul>
  </div>
  )
}
