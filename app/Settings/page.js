"use client";
import React from 'react';
import SideNavbar from "../components/SideNavbar";
import Header from '../components/Header';
import Logo from '../components/Logo';

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNavbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-grow">
          <div className="w-1/2 p-8">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input type="text" placeholder="First Name" className="border border-gray-300 rounded p-2 flex-1"/>
                <input type="text" placeholder="Last Name" className="border border-gray-300 rounded p-2 flex-1"/>
              </div>
              <input type="text" placeholder="Email Address" className="border border-gray-300 rounded p-2 w-full"/>
              <input type="text" placeholder="University ID" className="border border-gray-300 rounded p-2 w-full"/>
              <input type="text" placeholder="Office Location" className="border border-gray-300 rounded p-2 w-full"/>
              <div className="flex space-x-4">
                <input type="text" placeholder="Faculty" className="border border-gray-300 rounded p-2 flex-1"/>
                <input type="text" placeholder="Department" className="border border-gray-300 rounded p-2 flex-1"/>
              </div>
            </form>
          </div>
          <div className="absolute top-0 right-0 bg-blue-950 h-full w-1/2 flex justify-end items-center" style={{ clipPath: "ellipse(50% 100% at 100% 50%)" }}>
          <img src="/BAU-Istanbul-login-rightSide-image.png" alt="Background" className="h-full" style={{ objectFit: 'cover', width: 'auto', maxHeight: '100%' }} />
        </div>
        </div>
        <Logo />
      </div>
    </div>
  );
}

export default SettingsPage;
