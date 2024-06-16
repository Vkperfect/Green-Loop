import React, { useState } from 'react';
import axios from 'axios';

const Signup= () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/signup', formData);
      console.log(response.data); // Assuming your API returns some data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 border w-[500px] border-[#33cc33] rounded-md shadow-lg shadow-[#33cc33] my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full rounded border border-gray-300 focus:border-blue-500 focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 p-2 block w-full rounded border border-gray-300 focus:border-blue-500 focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full rounded border border-gray-300 focus:border-blue-500 focus:outline-none" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 block w-full rounded border border-gray-300 focus:border-blue-500 focus:outline-none" required />
        </div>
        <button type="submit" className="bg-[#33cc33] text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default Signup;
