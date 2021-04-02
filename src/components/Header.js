import React from 'react';
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import * as headerStyles from './styles/header.module.scss'

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={headerStyles.root}>
      <AppBar position="static" >
        <Toolbar className={headerStyles.nav}>
          <Link to='/' className={headerStyles.title}>
            Coffee <span>Bean</span>
          </Link>
          <div className={headerStyles.headerNav}>
          <Link to='/' className={headerStyles.navItem}>Home</Link>
          <Link to='/about' className={headerStyles.navItem}>About</Link>
          <Link to='/menu' className={headerStyles.navItem}>Menu</Link>
          <Link to='/contact' className={headerStyles.navItem}>Contact</Link>
          </div>
            <div>
              <IconButton
                className={headerStyles.menuButton}
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon className={headerStyles.menuIcon} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                className={headerStyles.dropdownMenu}
              >
                <MenuItem onClick={handleClose}><Link to='/'>Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/about'>About</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/menu'>Menu</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/contact'>Contact</Link></MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
