import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BookKost from './pages/BookKost';
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ReviewKost from './pages/ReviewKost';
import UserProfile from "./pages/UserProfile";

const imageUrl = 'https://cdn.discordapp.com/attachments/902748382341234842/1249397581188960266/image.png?ex=666727ac&is=6665d62c&hm=ea2118bc688f39e407a9843c1c27fb891825d4405b311b9877fe4ac9f21a3db8&';

const App = () => {
  return (
      <div className="flex flex-col justify-start items-center min-h-screen py-10"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-indigo-900">Welcome to CozyHive!</h1>
          <p className="text-lg mb-8">
            CozyHive is a web application designed to simplify the process of finding the perfect boarding house around Universitas Indonesia (UI). Are you ready to explore your preferences of these boarding house?
          </p>
          <div className="flex justify-center space-x-4 py-2">
            <Link to="/login">
              <button className="px-6 py-2 text-lg bg-violet-400 text-white rounded hover:bg-violet-500">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-2 text-lg bg-indigo-400 text-white rounded hover:bg-indigo-500">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/review" element={<ReviewKost />} />
          <Route path="/booking" element={<BookKost />} />
        </Routes>
      </div>
  );
};

export default App;
