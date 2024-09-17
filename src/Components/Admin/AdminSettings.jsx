import React, { useState } from 'react';

const AdminSettings = () => {
  const [isVacationMode, setIsVacationMode] = useState(false);

  const toggleVacationMode = () => {
    setIsVacationMode(!isVacationMode);
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-8 lg:p-12">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="font-bold text-lg">Pages</h2>
        <ul className="mt-4">
          <li className="py-2 hover:bg-yellow-200 cursor-pointer">Admins</li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer">Main Listing</li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer">Order Page</li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer">Details Page</li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer">General Setting</li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer">Reservations</li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer">Add Promotion</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">General Setting Page</h1>
        <p className="text-gray-600 mb-6">Manage your restaurant availability.</p>
        
        <section className="bg-gray-200 rounded-lg p-4 mb-6">
          <h2 className="font-bold text-lg mb-2">Mcdonald’s Seri Austin DT</h2>
          <h3 className="font-semibold mb-2">Vacation Mode Settings</h3>
          <p className="text-gray-600 mb-4">
            Vacation Mode <br />
            (Clicking the button will disable your availability in the app. When you return, you’ll need to manually toggle it back on.)
          </p>
          <label className="flex items-center cursor-pointer">
            <span className="mr-2">{isVacationMode ? 'ON' : 'OFF'}</span>
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={isVacationMode} 
                onChange={toggleVacationMode} 
              />
              <div className={`block bg-gray-300 w-14 h-8 rounded-full ${isVacationMode ? 'bg-green-500' : ''}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isVacationMode ? 'transform translate-x-full bg-green-500' : ''}`}></div>
            </div>
          </label>
        </section>
        
        <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-yellow-400 transition duration-200">
          Sign Out
        </button>
      </main>
    </div>
  );
};

export default AdminSettings;