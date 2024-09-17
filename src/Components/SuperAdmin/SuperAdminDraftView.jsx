import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-64 bg-white border-r border-gray-200 h-full">
    <div className="p-4">
      <h2 className="text-lg font-semibold">Pages</h2>
      <ul className="mt-4 space-y-2">
        <li className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">Super Admins</li>
        <li className="pl-4 text-yellow-600">Add Vendor</li>
        <li className="pl-4">Manage Vendor</li>
        <li className="pl-4">Broadcast Notif</li>
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
  const [restaurantName, setRestaurantName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGenerateCredentials = () => {
    // Logic to generate credentials would go here
    console.log("Generating credentials...");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2">Add New Vendor</h2>
      <p className="text-gray-600 mb-6">Here you are able to add new vendor into your system.</p>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Add new restaurant</h3>
        
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Credential Details</h4>
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          
          {isExpanded && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Restaurant Name Here"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter Username for Panel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter Password for Panel"
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={handleGenerateCredentials}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Generate Credentials
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function SuperAdminDraftView() {
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