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
        <li className="pl-4">Details Page</li>
        <li className="pl-4">General Setting</li>
        <li className="pl-4">Reservations</li>
        <li className="pl-4 text-yellow-600">Add Promotion</li>
      </ul>
    </div>
  </div>
);

const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
    <h1 className="text-2xl font-bold">Add new promotion</h1>
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

const AddNewPromotion = () => {
  const [promotionCode, setPromotionCode] = useState('');
  const [promotionAmount, setPromotionAmount] = useState('');

  const handleSave = () => {
    console.log('Saving new promotion:', { promotionCode, promotionAmount });
    // Here you would typically send this data to your backend
  };

  return (
    <ExpandableSection title="Add new promotion code">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Code</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Promotion Code Here"
            value={promotionCode}
            onChange={(e) => setPromotionCode(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Amount (%/RM)</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Percentage or Amount"
            value={promotionAmount}
            onChange={(e) => setPromotionAmount(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
    </ExpandableSection>
  );
};

const ExistingPromotions = () => {
  const promotions = [
    { code: 'RESTODOTCOMNEW', amount: '50%' },
    { code: 'RESTODOTCOMNEW', amount: 'RM10' },
    { code: 'RESTODOTCOMNEW', amount: 'RM5' },
    { code: 'RESTODOTCOMNEW', amount: '50%' },
    { code: 'RESTODOTCOMNEW', amount: '50%' },
    { code: 'RESTODOTCOMNEW', amount: '50%' },
    { code: 'RESTODOTCOMNEW', amount: '50%' },
    { code: 'RESTODOTCOMNEW', amount: '50%' },
    { code: 'RESTODOTCOMNEW', amount: '50%' },
  ];

  return (
    <ExpandableSection title="Existing promotional codes">
      <div className="space-y-2">
        {promotions.map((promotion, index) => (
          <div key={index} className="bg-white p-4 rounded-lg flex justify-between items-center">
            <div className="grid grid-cols-2 gap-4 flex-grow">
              <div>
                <h4 className="text-sm font-medium text-gray-700">Promotion Code</h4>
                <p>{promotion.code}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700">Promotion Amount (%/RM)</h4>
                <p>{promotion.amount}</p>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </ExpandableSection>
  );
};

export default function AddPromotion() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 lg:p-8">
          <p className="text-gray-600 mb-6">Manage your restaurant promotion codes.</p>
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">McDonald's Seri Austin DT</h2>
            <AddNewPromotion />
            <ExistingPromotions />
          </div>
        </main>
      </div>
    </div>
  );
}