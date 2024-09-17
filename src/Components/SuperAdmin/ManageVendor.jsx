import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-64 bg-white border-r border-gray-200 h-full">
    <div className="p-4">
      <h2 className="text-lg font-semibold">Pages</h2>
      <ul className="mt-4 space-y-2">
        <li className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">Super Admins</li>
        <li className="pl-4">Add Vendor</li>
        <li className="pl-4 text-yellow-600">Manage Vendor</li>
        <li className="pl-4">Broadcast Notif</li>
      </ul>
    </div>
  </div>
);

const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
    <div className="flex items-center">
       <img src="/Assets/Logo.png" alt="RESTO.COM Logo" className="h-8 md:h-10" />
    </div>
    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
      Sign Out
    </button>
  </header>
);

const VendorList = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const vendors = Array(14).fill().map((_, i) => ({
    id: i + 1,
    name: "Mcdonald's Seri Austin DT"
  }));

  const filteredVendors = vendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">All Registered Vendors</h3>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="bg-white p-6 rounded-lg">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search vendor registered name here"
              className="w-full p-2 pl-10 border border-gray-300 rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {filteredVendors.map((vendor) => (
              <div key={vendor.id} className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">{vendor.id}. {vendor.name}</span>
                <div className="space-x-2">
                  <button className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded text-sm">
                    Change Password
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm">
                    Delete Account
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MainContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-2">Manage All Vendors</h2>
    <p className="text-gray-600 mb-6">Here you are able to manage all signed vendors on your platform.</p>
    <VendorList />
  </div>
);

export default function ManageVendor() {
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