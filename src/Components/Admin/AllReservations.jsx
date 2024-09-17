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
    <h1 className="text-2xl font-bold">Reservations Page</h1>
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

const ReservationList = ({ reservations }) => (
  <div className="bg-white rounded-lg overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Time</th>
          <th className="px-4 py-2 text-left"></th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation, index) => (
          <tr key={index} className="border-t">
            <td className="px-4 py-2">{index + 1}. {reservation.name}</td>
            <td className="px-4 py-2">{reservation.time}</td>
            <td className="px-4 py-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded text-sm">
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ReservationsContent = () => {
  const upcomingReservations = Array(9).fill({
    name: "Muhammad Lorem Ipsum",
    time: "August 3, 2024, 5:00pm"
  });

  const completedReservations = Array(9).fill({
    name: "Muhammad Lorem Ipsum",
    time: "August 3, 2024, 5:00pm"
  });

  return (
    <div>
      <ExpandableSection title="Upcoming Reservations">
        <ReservationList reservations={upcomingReservations} />
      </ExpandableSection>
      <ExpandableSection title="Completed Reservations">
        <ReservationList reservations={completedReservations} />
      </ExpandableSection>
    </div>
  );
};

export default function ReservationsPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 lg:p-8">
          <p className="text-gray-600 mb-6">View all your Upcoming and Completed Reservations.</p>
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">McDonald's Seri Austin DT</h2>
            <ReservationsContent />
          </div>
        </main>
      </div>
    </div>
  );
}