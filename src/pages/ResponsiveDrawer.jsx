import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import colorsTheme from '../assets/colors';
import LogoutIcon from '@mui/icons-material/Logout';

import logo from '../assets/ZelenyLogoLetters.png'
import logo2 from '../assets/ZelenyLogo.png'
import { mainLinkItems } from '../root';
import { Avatar, Chip } from '@mui/material';
import { purple } from '@mui/material/colors';



const drawerWidth = 320;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Alinea los elementos a la izquierda
        justifyContent: 'flex-end', // Alinea los elementos en la parte inferior
        height: "200px",
        backgroundImage: 'url(https://i.redd.it/gxs1hn6lua471.jpg)',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        padding: '16px', // Agrega un relleno opcional para separar los elementos del borde
      }}>
        <Avatar sx={{ bgcolor: purple[500], width: 56, height: 56, mb: 2 }}>N</Avatar>
        <Box sx={{ display: 'flex', flexDirection:"row"}}>
          <Typography variant="body1" color="white" component="h2">
            Nombre de usuario
          </Typography>
          <Chip color="info" label="Plan" sx={{ml:4}} />
        </Box>
        <Typography variant="body2" color="white" component="h2">
          correo@electronico.com
        </Typography>
      </Box>
      <Divider />


      <List>
        {mainLinkItems}
      </List>

      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "rgba(255, 255, 255, 0.765)",
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ width: "100%", display: { xs: 'flex', sm: 'none' }, color: "black", alignItems: 'center', justifyContent: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '80px' }} />
          </Box>
          <IconButton
            onClick={logout}
            variant="h6"
            color="black"
            style={{ marginLeft: "auto" }}
          >
            <LogoutIcon fontSize='large' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: "white",
              color: "black",
              textDecoration: 'none',
            },
          }}

        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          PaperProps={{
            sx: {
              backgroundColor: "inherit",
              color: "black",
              textDecoration: 'none',
              m: 2,
              boxShadow: 1,
              borderRadius: 3,
            }
          }}
          open
        >

          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, }}
      // backgroundColor:'#f5f5f5'
      >
        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;