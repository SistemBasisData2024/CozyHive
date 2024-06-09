import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    if (!authToken) return;
    fetchUserData(authToken);
  }, [authToken]);


  const fetchUserData = async (token) => {
    try {
      const response = await fetch('URL_BACKEND/user_profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className='bg-lime-50'>
      <Navbar />
      <div className="flex flex-col items-center justify-start min-h-screen py-10">
      <div className="w-full max-w-2xl px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Profile</h1>
        <div className="bg-white p-6 shadow-md rounded-md mb-6">
          {userData && (
            <div>
              <p><span className="font-bold">Username:</span> {userData.username}</p>
              <p><span className="font-bold">Email:</span> {userData.email}</p>
              <p><span className="font-bold">Password:</span> {userData.password}</p>
              <p><span className="font-bold">Telepon:</span> {userData.telepon}</p>
              <p><span className="font-bold">Daftar booking:</span> {userData.booked_kosan}</p>
            </div>
          )}
        </div>
        <div className="mt-6 text-center">
          <Link to="/mainpage" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserProfile;
