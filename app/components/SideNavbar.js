"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { SideNavbarData } from './SideNavbarData';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../components/Logo';

//Here I fixed the position of the sidebar and the main content. I also added a toggle button to collapse and expand the sidebar.
// Now the toggle button actually works LOL! :) 

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? 'w-16' : 'w-48';

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex">
      <div className={`fixed top-0 left-0 h-screen bg-gray-900 text-white transition-width duration-300 ease-in-out ${sidebarWidth}`}>
        <button className="p-2 text-white focus:outline-none" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
        <ul className="flex flex-col flex-1 overflow-y-auto">
          {SideNavbarData.map((item, index) => (
            <li key={index} className="flex items-center my-3 mx-3">
              <Link href={item.link} passHref>
                <div className="flex items-center cursor-pointer">
                  <div className="mr-2">{item.icon}</div>
                  {!collapsed && <span className="ml-2">{item.title}</span>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {!collapsed && (
          <div className="flex items-center justify-center p-4">
            <Logo />
          </div>
        )}
      </div>
      <div className={`flex-1 ml-16 md:ml-48 transition-margin duration-300 ease-in-out ${collapsed ? 'ml-16' : 'ml-48'}`}>
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default SideNavbar;
