import axios from 'axios';
import React from 'react';

const Update = () => {
  const handleUpdate = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const data = { name, age };

    try {
      await axios.put(`https://fsd-backened.onrender.com/users/${id}`, data);
      alert("User updated successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Update failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleUpdate}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">Update User</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">User ID</label>
          <input
            type="text"
            name="id"
            placeholder="Enter user ID"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter new name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Age</label>
          <input
            type="text"
            name="age"
            placeholder="Enter new age"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
