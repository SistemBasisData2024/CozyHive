import React, { useState } from "react";
import { userLogin } from "../actions/userAction";
//import Navbar from "../components/Navbar";

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await userLogin(formData);
    if (result.success) {
      setMessage("Login successful!");
      console.log(result);
      //localStorage.setItem("userid", result.data)
    } else {
      console.log(`${result.success}`);
      setMessage("Login failed. Please try again.");
    }
};

  return (
    <div>
      {/* <Navbar /> */}
      <div className="min-h-screen flex items-center justify-center bg-blue-200">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl text-white font-bold text-center mb-8">
            Login to your Account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-300">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
          {message && (
            <div className="mt-4 text-gray-300 text-center">
              <p>{message}</p>
            </div>
          )}
          <div className="mt-4 text-gray-300 text-center">
            <p>
              Dont have an account?{" "}
              <a href="/signup" className="text-blue-500">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
  