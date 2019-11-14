import React from 'react';
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { inject } from 'mobx-react';

const Header = inject('themeUI')(({themeUI}) =>(
  <AppBar position="static">
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <nav className="nav-bar">
        <MenuList className="main-nav">
          <MenuItem>
            <NavLink to="/">Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/favorites">Favorites</NavLink>
          </MenuItem>
        </MenuList>
      </nav>
      <FormControlLabel
        label="Switch theme"
        control={
          <Switch
            onChange={() => {themeUI.changeTheme()}}
            color="secondary"
          />
        }
      />
    </Grid>
  </AppBar>
  )
)

export default Header;
