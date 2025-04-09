import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    viewdata();
  }, []);

  const viewdata = async () => {
    try {
      const res = await axios.get('https://fsd-backened.onrender.com/users');
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white p-8 rounded-3xl shadow-2xl border border-green-200">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8 underline decoration-green-400">
          🌟 Registered Users List
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-gray-700">
            <thead>
              <tr className="bg-green-600 text-white text-left text-base">
                <th className="px-6 py-4 rounded-tl-xl">ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4 rounded-tr-xl">Age</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`${
                      index % 2 === 0 ? 'bg-green-50' : 'bg-white'
                    } border-b hover:bg-green-100 transition-colors duration-150`}
                  >
                    <td className="px-6 py-3 font-medium">{user.id}</td>
                    <td className="px-6 py-3">{user.name}</td>
                    <td className="px-6 py-3">{user.age}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-6 py-6 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default View;
