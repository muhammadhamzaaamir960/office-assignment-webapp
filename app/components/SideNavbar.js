"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { SideNavbarData } from './SideNavbarData';
import MenuIcon from '@mui/icons-material/Menu';

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`side-navbar ${collapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleSidebar}>
        <MenuIcon /> 
      </button>
      <ul className="SidebarList">
        {SideNavbarData.map((item, index) => {
          return (
            <li key={index} className="row items-center">
              <Link href={item.link} passHref>
                <div className="flex cursor-pointer">
                  <div className="icon">{item.icon}</div>
                  {!collapsed && <span className="title">{item.title}</span>}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNavbar;
