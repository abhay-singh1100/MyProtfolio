import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            color="secondary"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            color="secondary"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/experience"
            color="secondary"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            Experience
          </Button>
          <Button
            component={Link}
            to="/projects"
            color="secondary"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/contact"
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