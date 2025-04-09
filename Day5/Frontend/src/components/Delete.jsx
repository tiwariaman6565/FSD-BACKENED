import axios from 'axios';
import React from 'react';

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    try {
      await axios.delete(`https://fsd-backened.onrender.com/users/${id}`);
      alert("Deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete. Check the ID or try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleDelete} 
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Delete User</h2>
        <input
          type="text"
          placeholder="Enter user ID"
          name="id"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default Delete;
