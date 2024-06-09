import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../actions/userAction";

const LoginPage = () => {
const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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
      localStorage.setItem("userData", JSON.stringify(result.data));
      navigate("/mainpage");
    } else {
      console.log(`${result.success}`);
      setMessage("Login failed. Please try again.");
    }
};

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-fuchsia-100">
      <h1 className="text-5xl text-fuchsia-900 font-bold text-center mb-8">
            Logging in...
          </h1>
        <div className="max-w-md w-full bg-purple-800 p-8 rounded-lg">
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="block w-full bg-purple-300 border border-purple-600 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-purple-500"
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
                className="block w-full bg-purple-300 border border-purple-600 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-purple-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
            <button
              type="submit"
              href = "/mainpage" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
            </div>
          </form>
          {message && (
            <div className="mt-4 text-gray-300 text-center">
              <p>{message}</p>
            </div>
          )}
          <div className="mt-4 text-gray-300 text-center">
            <p>
              Dont have an account?{" "}
              <a href="/signup" className="font-bold text-blue-400">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;