import React, { useState } from 'react';
import LoginNotification from '../components/LoginNotification';
import axios from 'axios'; // this is for making http reqs

const Login = () => {
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '', // Assuming we want to keep the email field.
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      // The endpoint and payload might need adjustment to include email if necessary.
      const response = await axios.post('/api/user/login', {
        username: formData.username,
        password: formData.password,
        // email: formData.email, // Uncomment if the backend requires the email field.
      });

      if (response.status === 200) {
        setNotification({ message: 'Login successful!', type: 'success' });
        // Add your routing logic here
      }
    } catch (error) {
      console.error('Login failed:', error);
      setNotification({ message: 'Login failed. Please check your username and password.', type: 'failure' });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Existing background and logo JSX */}
      <div className="z-10 px-10 py-8 mt-4 text-left bg-slate-200 shadow-lg border rounded-md">
        {/* ... */}
        <form>
          <div className="mt-4">
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div className="mt-4">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div className="flex items-baseline justify-between">
              <button type="button" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={handleLogin}>Login</button>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
          </div>
        </form>
        {notification && <LoginNotification message={notification.message} type={notification.type} />}
      </div>
    </div>
  );
};

export default Login;
