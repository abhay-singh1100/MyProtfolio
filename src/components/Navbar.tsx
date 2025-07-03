import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            href="#home"
            color="secondary"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            Home
          </Button>
          <Button
            href="#about"
            color="secondary"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            About
          </Button>
          <Button
            href="#experience"
            color="secondary"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            Experience
          </Button>
          <Button
            href="#projects"
            color="secondary"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            Projects
          </Button>
          <Button
            href="#contact"
            color="secondary"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 