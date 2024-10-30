import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001//api/auth/login", formData);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response.data);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-gray-100 rounded-md max-w-md mx-auto">
      <label className="flex flex-col text-left font-medium">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 mt-1 border border-gray-300 rounded"
        />
      </label>

      <label className="flex flex-col text-left font-medium">
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="p-2 mt-1 border border-gray-300 rounded"
        />
      </label>

      <button type="submit" className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300">
       Sign In
      </button>
    </form>
  );
};

export default SignIn;
