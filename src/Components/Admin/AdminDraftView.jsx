import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-64 bg-white border-r border-gray-200 h-full">
    <div className="p-4">
      <h2 className="text-lg font-semibold">Pages</h2>
      <ul className="mt-4 space-y-2">
        <li className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">Admins</li>
        <li className="pl-4">Main Listing</li>
        <li className="pl-4">Order Page</li>
        <li className="pl-4">Details Page</li>
        <li className="pl-4">General Setting</li>
        <li className="pl-4">Reservations</li>
        <li className="pl-4">Add Promotion</li>
      </ul>
    </div>
  </div>
);

const Header = () => (
  <header className="bg-yellow-400 p-4 flex justify-between items-center">
    <img src="/Assets/Logo.png" alt="RESTO.COM Logo" className="h-8 md:h-10" />
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
      Sign Out
    </button>
  </header>
);

const MainContent = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [restaurantName, setRestaurantName] = useState("Mcdonald's Seri Austin DT");
  const [isHalal, setIsHalal] = useState(true);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2">Manage your restaurant details</h2>
      <p className="text-gray-600 mb-6">Manage your restaurant details from address, menu, images etc.</p>
      
      <div className="bg-[#F1F5FA] p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">{restaurantName}</h3>
        
        <div className="bg-[#DEE5F0] p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Main listing page customizations</h4>
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          
          {isExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-md text-black mb-2 font-bold">Name</label>
                <input
                  type="text"
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Restaurant Name Here"
                />
                
                <div className="mt-4">
                  <label className="block text-md text-black mb-2 font-bold">Main Taggings</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={isHalal}
                        onChange={() => setIsHalal(!isHalal)}
                        className="mr-2"
                      />
                      Halal
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={!isHalal}
                        onChange={() => setIsHalal(!isHalal)}
                        className="mr-2"
                      />
                      Non-halal
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-md text-black mb-2 font-bold">Image Snippet</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <p>Drop your file here</p>
                  <p>or</p>
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    select
                  </button>
                  <p className="mt-2 text-sm text-gray-500">
                    Accepted file types: .png, .jpg, .gif, .txt, .csv, .doc, .docx, .xls, .xlsx, .pdf
                  </p>
                  <p className="text-sm text-gray-500">Maximum file size: 20MB</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AdminDraftView() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <MainContent />
        </main>
      </div>
    </div>
  );
}