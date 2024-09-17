import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { username, password });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4 md:p-6 lg:p-8">
        <img src="/Assets/Logo.png" alt="RESTO.COM Logo" className="h-8 md:h-10" />
      </header>
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-10">
          <div className="bg-[#DEE5F0] p-12 rounded-lg shadow-lg">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-6">
              Panel Login Access
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div className='mb-8'>
                  <label htmlFor="username" className="text-black font-bold text-2xl">Username:</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter Username Here"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-black font-bold text-2xl">Password:</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter Password Here"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}