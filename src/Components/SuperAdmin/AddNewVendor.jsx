import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-64 bg-white border-r border-gray-200 h-full">
    <div className="p-4">
      <h2 className="text-lg font-semibold">Pages</h2>
      <ul className="mt-4 space-y-2">
        <li className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">Super Admins</li>
        <li className="pl-4">Add Vendor</li>
        <li className="pl-4">Manage Vendor</li>
        <li className="pl-4 text-yellow-600">Broadcast Notif</li>
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

const NotificationForm = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleBroadcast = () => {
    console.log("Broadcasting notification:", { title, contents });
    // Here you would typically send the notification to your backend
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Notification Broadcasts</h3>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="bg-white p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter Notification Title Here"
              />
            </div>
            <div>
              <label htmlFor="contents" className="block text-sm font-medium text-gray-700 mb-1">Contents</label>
              <textarea
                id="contents"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded h-32"
                placeholder="Enter Notification Contents Here"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleBroadcast}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Broadcast to everyone
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MainContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-2">Broadcast Notification</h2>
    <p className="text-gray-600 mb-6">Here you will be able to broadcast notification to all your users.</p>
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Broadcast to all users</h3>
      <NotificationForm />
    </div>
  </div>
);

export default function AddNewVendor() {
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