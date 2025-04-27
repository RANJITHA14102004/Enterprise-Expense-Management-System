import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, IconButton, Box, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = ({ open, onClose }) => {
  const pages = [
    { name: 'Dashboard', path: '/' },
    { name: 'Expense Management', path: '/expenses' },
    { name: 'Approvals', path: '/approvals' },
    { name: 'User Management', path: '/users' },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Enterprise Expense</Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ width: 240 }}>
          <List>
            {pages.map((page) => (
              <ListItem button component={Link} to={page.path} key={page.name}>
                <ListItemText primary={page.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
