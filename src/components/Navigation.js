import React, { useState, useEffect } from 'react';
import {
  Drawer, IconButton, List, ListItem, ListItemText, useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {
  const isLargeScreen = useMediaQuery('(min-width:769px)');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isLargeScreen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isLargeScreen]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const menuItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Profile', path: '/profile' },
    { id: 3, text: 'Settings', path: '/settings' },
    { id: 4, text: 'Logout', path: '/logout' },
  ];

  return (
    <>
      {!isLargeScreen && (
        <IconButton
          color="inherit"
          aria-label="toggle drawer"
          edge="start"
          onClick={toggleDrawer(!open)}
          sx={{
            display: { xs: 'block', lg: 'none' },
            position: 'fixed',
            top: 10,
            left: 10,
            zIndex: 1300,
          }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        variant={isLargeScreen ? 'persistent' : 'temporary'}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <List sx={{ marginTop: '20%' }}>
          {menuItems.map((item) => (
            <ListItem button key={item.id} component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
