import React, { useState } from 'react';
import LoginNotification from '../notif_components/LoginNotification';
import axios from 'axios'; // this is for making http reqs

const Login = () => {
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/user/login', {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        setNotification({ message: 'Login successful!', type: 'success' });
        // guys if youre reading this, add router.push('/dashboard'); or replace dashboard with whatever page u want it to redirect to
          
      }
    } catch (error) {
      console.error('Login failed:', error);
      setNotification({ message: 'Login failed. Please check your username and password.', type: 'failure' });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-blue-950 h-full w-1/2 flex justify-end items-center" style={{ clipPath: "ellipse(50% 100% at 100% 50%)" }}>
        <img src="/BAU-Istanbul-login-rightSide-image.png" alt="Background" className="h-full" style={{ objectFit: 'cover', width: 'auto', maxHeight: '100%' }} />
      </div>

      <div className="z-10 px-10 py-8 mt-4 text-left bg-slate-200 shadow-lg border rounded-md">
        <div className="flex justify-center mb-4">
          <img src="/Bahçeşehir_Üniversitesi_logo.png" alt="Logo" className="h-28 w-24" />
        </div>

        <h3 className="text-2xl font-bold text-center text-blue-950">Login to your account</h3>
        <form>
          <div className="mt-4">
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="mt-4">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="flex items-baseline justify-between">
              <button type="button" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </form>
        {notification && <LoginNotification message={notification.message} type={notification.type} />}
      </div>
    </div>
  );
};

export default Login;

  
