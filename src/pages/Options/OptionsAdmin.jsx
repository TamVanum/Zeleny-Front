import React, { useState } from 'react';
import { Box, Button, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';
import TableUsers from '../../components/Tables/TableUsers';
import TableHydroponics from '../../components/Tables/TableHidroponics';

export default function OptionsAdmin() {
  const [showUsersGrid, setShowUsersGrid] = useState(true); // Configurar en true por defecto
  const [showHydroponicsGrid, setShowHydroponicsGrid] = useState(false);

  const handleShowUsersGrid = () => {
    setShowUsersGrid(true);
    setShowHydroponicsGrid(false);
  };

  const handleShowHydroponicsGrid = () => {
    setShowUsersGrid(false);
    setShowHydroponicsGrid(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 10, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Button variant='contained' sx={{ width: "100%" }} onClick={handleShowUsersGrid}>
                Usuarios
              </Button>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Button variant='contained' color='success' sx={{ width: "100%" }} onClick={handleShowHydroponicsGrid}>
                Hidroponicos
              </Button>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              {showUsersGrid && <TableUsers />}
              {showHydroponicsGrid && <TableHydroponics />}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}