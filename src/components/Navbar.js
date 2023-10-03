import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#e0e0e0' }}>
      <Toolbar sx={{ paddingTop: '8px', paddingBottom: '6px' }}>
        <Link to="/">
          <img src="../images/logo.jpeg" alt="Logo" width={150} height={80} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
