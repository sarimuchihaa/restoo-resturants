import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaTrash } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-64 bg-white border-r border-gray-200 h-full">
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img src="/placeholder.svg?height=40&width=120" alt="RESTO.COM Logo" className="h-8" />
        <span className="ml-2 text-xs bg-black text-white px-2 py-1 rounded">MAKE FLASH ORDER</span>
      </div>
      <h2 className="text-lg font-semibold">Pages</h2>
      <ul className="mt-4 space-y-2">
        <li className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">Admins</li>
        <li className="pl-4">Main Listing</li>
        <li className="pl-4">Order Page</li>
        <li className="pl-4 text-yellow-600">Details Page</li>
        <li className="pl-4">General Setting</li>
        <li className="pl-4">Reservations</li>
        <li className="pl-4">Add Promotion</li>
      </ul>
    </div>
  </div>
);

const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
    <h1 className="text-2xl font-bold">Manage your restaurant details</h1>
    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
      Sign Out
    </button>
  </header>
);

const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isExpanded && children}
    </div>
  );
};

const MainListingCustomizations = () => (
  <ExpandableSection title="Main listing page customizations">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter Restaurant Name Here" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Description</label>
        <textarea className="w-full p-2 border border-gray-300 rounded" rows={3} placeholder="Enter Restaurant Description Here"></textarea>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Details Page Banner</label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-4">
        <p>Drop your file here</p>
        <p>or</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">select</button>
      </div>
    </div>
    <div className="space-y-4">
      {[1, 2].map(index => (
        <div key={index} className="relative">
          <img src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mcdonalds-${index}-${index === 1 ? 'xPbzYQF2fLPtefKlDqcPSuwAGB7ZAr' : 'Wbz9Ox510QR8nra7unjObxLMQU12db'}.jpg`} alt={`McDonald's ${index}`} className="w-full h-40 object-cover rounded" />
          <button className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
  </ExpandableSection>
);

const OperationHours = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <ExpandableSection title="Operation and Promotional Hours Settings">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold mb-2">Operation Hours</h4>
          {days.map(day => (
            <div key={day} className="flex items-center mb-2">
              <span className="w-24">{day}:</span>
              <select className="mr-2 p-1 border border-gray-300 rounded">
                <option>09:00</option>
              </select>
              <span>-</span>
              <select className="ml-2 p-1 border border-gray-300 rounded">
                <option>18:00</option>
              </select>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-semibold mb-2">Promotional Hours</h4>
          {['Sunday', 'Monday', 'Tuesday'].map(day => (
            <div key={day} className="flex items-center mb-2">
              <span className="w-24">{day}:</span>
              <select className="mr-2 p-1 border border-gray-300 rounded">
                <option>09:00</option>
              </select>
              <span>-</span>
              <select className="ml-2 mr-2 p-1 border border-gray-300 rounded">
                <option>15:00</option>
              </select>
              <select className="p-1 border border-gray-300 rounded bg-yellow-200">
                <option>30% OFF</option>
              </select>
            </div>
          ))}
          <button className="text-blue-500 hover:underline">+ Add new promotional hours</button>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
    </ExpandableSection>
  );
};

const AddressSettings = () => (
  <ExpandableSection title="Address Settings">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Enter Address</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter Address Here" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Google Map or Waze Link</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter Google Map or Waze Link Here" />
      </div>
    </div>
    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
  </ExpandableSection>
);

export default function RestaurantDetails() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 lg:p-8">
          <p className="text-gray-600 mb-6">Manage your restaurant details for user details view.</p>
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">McDonald's Seri Austin DT</h2>
            <MainListingCustomizations />
            <OperationHours />
            <AddressSettings />
          </div>
        </main>
      </div>
    </div>
  );
}