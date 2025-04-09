import React from 'react';
import Register from './components/Register';
import Delete from './components/Delete';
import View from './components/View';
import Update from './components/Update';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          User Registration System
        </h1>
        <div className="space-y-10">
          <Register />
          <Delete />
          <Update />
          <View />
        </div>
      </div>
    </div>
  );
};

export default App;
