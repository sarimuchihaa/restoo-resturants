import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
        <li className="pl-4 text-yellow-600">Reservations</li>
        <li className="pl-4">Add Promotion</li>
      </ul>
    </div>
  </div>
);

const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
    <h1 className="text-2xl font-bold">Reservation Details</h1>
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

const ReservationDetails = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <ExpandableSection title="Muhammad Lorem Ipsum's Order Details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <h4 className="font-semibold">Name</h4>
          <p>Muhammad Lorem Ipsum</p>
        </div>
        <div>
          <h4 className="font-semibold">Order Date</h4>
          <p>August 3, 2024, 5PM</p>
        </div>
        <div>
          <h4 className="font-semibold">Total Pax</h4>
          <p>5 pax</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold">Phone Number</h4>
          <p>+60116225245</p>
        </div>
        <div>
          <h4 className="font-semibold">Order Note</h4>
          <p>This is for a birthday! The cake please dont bring it unless i say so. Thank you.</p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Order Summary</h4>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Menu Item</th>
              <th className="p-2 text-left">QTY</th>
              <th className="p-2 text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: 'Laksa Johor', qty: 'x1', options: 'Medium Spicy, No Vegetables, Extra Mushroom' },
              { item: 'Laksa Penang', qty: 'x2', options: 'Medium Spicy, No Vegetables, Extra Mushroom' },
              { item: 'Laksa Lorem', qty: 'x1', options: 'Medium Spicy, No Vegetables, Extra Mushroom' },
              { item: 'Laksa Ipsum', qty: 'x1', options: 'Medium Spicy, No Vegetables, Extra Mushroom' },
            ].map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{index + 1}. {item.item}</td>
                <td className="p-2">{item.qty}</td>
                <td className="p-2">{item.options}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Reservation Completed?</h4>
        <p className="text-sm text-gray-600 mb-2">
          Clicking this button will move the order to COMPLETED RESERVATION tab, this will mark as order is completed.
        </p>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isCompleted}
              onChange={() => setIsCompleted(!isCompleted)}
            />
            <div className={`block w-14 h-8 rounded-full ${isCompleted ? 'bg-green-400' : 'bg-gray-300'}`}></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isCompleted ? 'transform translate-x-6' : ''}`}></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium">
            {isCompleted ? 'COMPLETED' : 'MARK AS COMPLETED'}
          </div>
        </label>
      </div>
    </ExpandableSection>
  );
};

export default function ReservationDetailsPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 lg:p-8">
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">McDonald's Seri Austin DT</h2>
            <ReservationDetails />
          </div>
        </main>
      </div>
    </div>
  );
}