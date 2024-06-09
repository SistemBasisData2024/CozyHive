import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const BookKost = () => {
  const { kosan_id } = useParams();
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem('userId');

    const bookingData = {
      kosan_id: kosan_id,
      user_id: user_id,
      start_date: formData.startDate,
      end_date: formData.endDate,
      status_book: 'booked'
    };

    try {
      const response = await fetch('URL_BACKEND/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        setMessage('Booking Successful!');
        setTimeout(() => {
          setMessage('');
          navigate('/mainpage');
        }, 3000);
      } else {
        setMessage('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error booking kosan:', error);
      setMessage('Booking failed. Please try again.');
    }
  };

  return (
    <div className="bg-fuchsia-100 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl text-fuchsia-900 font-bold text-center mb-8">Book Kosan</h1>
        <div className="max-w-md w-full bg-purple-800 p-8 rounded-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="startDate" className="block text-white">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="block w-full bg-purple-300 border border-purple-600 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-purple-500"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-white">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="block w-full bg-purple-300 border border-purple-600 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-purple-500"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </form>
          {message && (
            <div className="mt-4 text-gray-300 text-center">
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookKost;
