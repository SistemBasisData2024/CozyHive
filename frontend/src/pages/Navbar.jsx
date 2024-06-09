import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg flex-grow">
          <h2 className="text-2xl font-bold">CozyHive</h2>
        </div>
        <div className="text-white text-lg">
          <Link to="/mainpage" className="mr-4 hover:underline">Home</Link>
          <Link to="/userProfile" className="hover:underline">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
