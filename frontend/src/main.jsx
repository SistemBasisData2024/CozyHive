import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import BookKost from './pages/BookKost.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MainPage from './pages/MainPage.jsx';
import ReviewKost from './pages/ReviewKost.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import UserProfile from './pages/UserProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "signup",
    element: <SignUpPage/>
  },
  {
    path: "mainpage",
    element: <MainPage/>
  },
  {
    path: "userProfile",
    element: <UserProfile/>
  },
  {
    path: "review",
    element: <ReviewKost/>
  },
  {
    path: "booking",
    element: <BookKost/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
