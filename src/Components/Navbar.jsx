import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-200 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-custom-blue font-bold text-2xl">
          UseContext
        </div>
        <div className="space-x-6">
          <Link to="/home"    className="font-bold text-custom-blue hover:text-blue-900 px-6 text-lg">Home</Link>
          <Link to="/about"   className="font-bold text-custom-blue hover:text-blue-900 px-6 text-lg">About</Link>
          <Link to="/contact" className="font-bold text-custom-blue hover:text-blue-900 px-6 text-lg">Contact</Link>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
