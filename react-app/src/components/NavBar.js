import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from './Search';


const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            User Directory
          </Typography>
          <Search></Search>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
