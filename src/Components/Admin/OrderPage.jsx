import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-64 bg-white border-r border-gray-200 h-full">
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img src="/placeholder.svg?height=40&width=120" alt="RESTO.COM Logo" className="h-8" />
        <span className="ml-2 text-xs bg-black text-white px-2 py-1 rounded">MAKE FLASH ORDER</span>
      </div>
      <h2 className="text-lg font-semibold">Pages</h2>
      <ul className="mt-4 space-y-2">
        <li className="pl-4">Main Listing</li>
        <li className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">Order Page</li>
        <li className="pl-4">Details Page</li>
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

const MainOrderPageCustomizations = () => (
  <ExpandableSection title="Main order page customizations">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter Restaurant Name Here" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Image Banner</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <p>Drop your file here</p>
          <p>or</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">select</button>
        </div>
      </div>
    </div>
    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save changes</button>
  </ExpandableSection>
);

const ReservationSettings = () => (
  <ExpandableSection title="Reservation Settings">
    <h4 className="font-semibold mb-2">Total Table Settings</h4>
    <div className="space-y-2">
      {[1, 2, 3, 4, 5].map(table => (
        <div key={table} className="flex items-center">
          <span className="mr-2">Table {table}</span>
          <input type="number" className="w-16 p-1 border border-gray-300 rounded" defaultValue={0} />
        </div>
      ))}
    </div>
    <button className="mt-2 text-blue-500 hover:underline">+ Add new table</button>
    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
  </ExpandableSection>
);

const PromotionalSlider = () => (
  <ExpandableSection title="Promotional slider section">
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-4">
      <p>Drop your file here</p>
      <p>or</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">select</button>
    </div>
    <div className="space-y-4">
      {[1, 2].map(index => (
        <div key={index} className="relative">
          <img src="/placeholder.svg?height=200&width=400" alt={`Promotional Slider ${index}`} className="w-full h-40 object-cover rounded" />
          <button className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
  </ExpandableSection>
);

const MenuManagement = () => {
  const categories = ['Asian', 'Western', 'Non-halal', 'Vegetarian', 'Beverages'];
  return (
    <ExpandableSection title="Menu Management">
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Manage Restaurant Category</h4>
        {categories.map(category => (
          <label key={category} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" defaultChecked={category !== 'Vegetarian'} />
            {category}
          </label>
        ))}
        <button className="text-blue-500 hover:underline">+ Add new category</button>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Add Menu Item</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter Menu Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Menu Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <p>Drop your file here</p>
              <p>or</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">select</button>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" rows={3} placeholder="Enter Menu Description"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Item Price</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded" placeholder="RM 0.00" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category for Item</label>
            {categories.map(category => (
              <label key={category} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" defaultChecked={category !== 'Vegetarian'} />
                {category}
              </label>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h5 className="font-semibold mb-2">Option 1</h5>
          <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Enter Title Here" />
          {['Spicy', 'Medium Spicy', 'Extra Spicy'].map(option => (
            <label key={option} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" defaultChecked />
              {option}
            </label>
          ))}
          <button className="text-blue-500 hover:underline">+ Add new option</button>
        </div>
        <div className="mt-4">
          <h5 className="font-semibold mb-2">Option 2</h5>
          <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Enter Title Here" />
          {['No Onions', 'Medium Onions', 'Extra Onions'].map(option => (
            <label key={option} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" defaultChecked />
              {option}
            </label>
          ))}
          <button className="text-blue-500 hover:underline">+ Add new option</button>
        </div>
        <button className="mt-4 text-blue-500 hover:underline">+ Add new option section</button>
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
    </ExpandableSection>
  );
};

const ExistingMenuItems = () => {
  const menuItems = ['Laksa Johor', 'Laksa Penang', 'Mee Tarik Spore', 'Nasi Goreng', 'Nasi Kandar', 'Mihun Tarik'];
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Existing Menu Items</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {menuItems.map(item => (
          <div key={item} className="bg-white p-2 rounded flex justify-between items-center">
            <span>{item}</span>
            <div>
              <button className="text-blue-500 mr-2"><FaEye /></button>
              <button className="text-red-500"><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function OrderPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 lg:p-8">
          <p className="text-gray-600 mb-6">Manage your restaurant details from address, menu, images etc.</p>
          <MainOrderPageCustomizations />
          <ReservationSettings />
          <PromotionalSlider />
          <MenuManagement />
          <ExistingMenuItems />
        </main>
      </div>
    </div>
  );
}