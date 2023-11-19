import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { Link as RouteLink } from 'react-router-dom';
import { Link } from '@mui/material';

const linksx = {
  mr: 3,
  my: 1,
  color: "grey",
}

export const mainLinkItems = (

  <nav>
    <Link to={`/`} component={RouteLink} underline='none' color={'grey'}>
      <ListItemButton>
        <SpaceDashboardIcon sx={{ ...linksx }} />
        Dashboard
      </ListItemButton>
    </Link>

    <Link to={`optionsAdmin`} component={RouteLink} underline='none' color={'grey'}>
      <ListItemButton>
        <PeopleAltIcon sx={{ ...linksx }} />
        Opciones Admin
      </ListItemButton>
    </Link>

    <Link to={`optionsUser`} component={RouteLink} underline='none' color={'grey'}>
      <ListItemButton>
        <PeopleAltIcon sx={{ ...linksx}} />
        Opciones User
      </ListItemButton>
    </Link>

    <Link to={`allUserRequest`} component={RouteLink} underline='none' color={'grey'}>
      <ListItemButton>
        <SwitchAccountIcon sx={{ ...linksx}} />
        Solicitudes de usuario
      </ListItemButton>
    </Link>

  </nav>


);
