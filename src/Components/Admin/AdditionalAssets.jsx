import React from 'react';

const AdditionalAssets = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12">
      {/* Popup Example */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Vacation Mode ON</h3>
        <p className="text-gray-600 mb-4">
          Vacation mode is on, order will not be processed, your restaurant will not be visible on the app, turn back the vacation mode when you’re back to get it up and running.
        </p>
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">Done</button>
        </div>
      </div>

      {/* Order Completed Popup */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Order Completed?</h3>
        <p className="text-gray-600 mb-4">
          Clicking this button will move the order to the "COMPLETED RESERVATION" tab and mark the order as completed.
        </p>
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">Completed</button>
        </div>
      </div>

      {/* Save Changes Banner */}
      <div className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md mb-4 w-full max-w-md text-center">
        Changes Saved!
      </div>

      {/* Changes Error Banner */}
      <div className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md w-full max-w-md text-center">
        Error! Address Column is empty!
      </div>
    </div>
  );
};

export default AdditionalAssets;