import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
  <div className="flex justify-center items-center min-h-screen bg-blue-200">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to CozyHive!</h1>
      <div className="flex justify-center space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 text-lg bg-green-500 text-white rounded hover:bg-green-600">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
};

export default App;
  