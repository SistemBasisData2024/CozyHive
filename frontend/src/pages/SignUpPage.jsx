import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../../actions/userAction";

const SignUpPage = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username : "",
    email : "",
    password : "",
    telepon : ""
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
    const result = await userSignUp(formData);
    if (result.success) {
      setMessage("Sign up successful!");
      console.log(result);
      navigate("/login");
      //localStorage.setItem("userid", result.data)
    } else {
      console.log(`${result.success}`);
      setMessage("Sign up failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-100">
      <div className="text-4xl text-indigo-800 font-bold text-center mb-8">
            Let's make an account!
          </div>
        <div className="max-w-md w-full bg-indigo-500 p-8 rounded-lg">
          
          <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
              <label htmlFor="username" className="block text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="block w-full bg-indigo-200 border border-indigo-400 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-indigo-500"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="block w-full bg-indigo-200 border border-indigo-400 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-indigo-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full bg-indigo-200 border border-indigo-400 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-indigo-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Telepon" className="block text-white">
                Telepon
              </label>
              <input
                type="text"
                id="telepon"
                name="telepon"
                className="block w-full bg-indigo-200 border border-indigo-400 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-indigo-500"
                value={formData.telepon}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
            </div>
          </form>
          {message && (
            <div className="mt-4 text-gray-300 text-center">
              <p>{message}</p>
            </div>
          )}
          <div className="mt-4 text-white text-center">
            <p>
              Already have an account?{" "}
              <a href="/login" className="font-bold text-indigo-900">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
