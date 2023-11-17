import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { Link as RouteLink } from 'react-router-dom';
import { Link } from '@mui/material';

export const mainLinkItems = (

  <nav>
    <Link to={`/`} component={RouteLink} underline='none' color={'grey'}>
      <ListItemButton>
        <DashboardIcon style={{ color: "grey" }} sx={{ mr: 3 }} />
        Dashboard
      </ListItemButton>
    </Link>

    <Link to={`optionsAdmin`} component={RouteLink} underline='none' color={'grey'}>
      <ListItemButton>
        <ConfirmationNumberIcon style={{ color: "grey" }} sx={{ mr: 3 }} />
        Opciones Admin
      </ListItemButton>
    </Link>

    <Link to={`optionsUser`} component={RouteLink} underline='none' color={'grey'}>
      <ListItemButton>
        <ConfirmationNumberIcon style={{ color: "grey" }} sx={{ mr: 3 }} />
        Opciones User
      </ListItemButton>
    </Link>

    <Link to={`allUserRequest`} component={RouteLink} underline='none' color={'grey'}>
      <ListItemButton>
        <RequestQuoteIcon style={{ color: "grey" }} sx={{ mr: 3 }} />
        Users Request
      </ListItemButton>
    </Link>

  </nav>


);
