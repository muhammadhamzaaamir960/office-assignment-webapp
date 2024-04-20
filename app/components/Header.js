import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const headerStyle = {
    position: 'fixed', 
    top: 0,            
    right: 0,         
    padding: '1rem',   
    zIndex: 1000,      
  };

  return (
    <header style={headerStyle}>
     
      <AccountCircleIcon style={{ fontSize: '2.5rem', cursor: 'pointer' }} />
     
    </header>
  );
};

export default Header;
