import React from 'react';

const ReservationNotification = () => {
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
        <h1 className="text-xl font-bold mb-4">Reservations Page</h1>
        <p className="text-gray-600 mb-6">View all your Upcoming and Completed Reservations.</p>
        
        {/* Upcoming Reservations */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-2">Upcoming Reservations</h2>
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Time</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array(5).fill().map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="border px-4 py-2">Restaurant user {index + 1}</td>
                  <td className="border px-4 py-2">August 5, 2023, 6:00pm</td>
                  <td className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">View Details</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* New Order Alert */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
            <h3 className="font-bold text-lg mb-2">New Order Alert</h3>
            <p className="text-gray-600 mb-4">
              You have received a new dine in reservation, click on View Details to view more.
            </p>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">View Details</button>
          </div>
        </div>

        {/* Completed Reservations */}
        <section>
          <h2 className="font-bold text-lg mb-2">Completed Reservations</h2>
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Time</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array(5).fill().map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="border px-4 py-2">Restaurant user {index + 6}</td>
                  <td className="border px-4 py-2">August 5, 2023, 5:00pm</td>
                  <td className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">View Details</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Sign Out Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-yellow-400 transition duration-200">
            Sign Out
          </button>
        </div>
      </main>
    </div>
  );
};

export default ReservationNotification;