import React, { useState } from 'react';
import { Box, Button, Container, CssBaseline, Grid, ThemeProvider, Toolbar, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TableHydroponics from '../../components/Tables/TableHidroponics';
import { Link } from 'react-router-dom';
import colorsTheme from '../../assets/colors';

export default function OptionsUser() {

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={colorsTheme}>
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

            <Box display="flex" sx={{ mb: 2 }}>
              <Link to={"/hydroponic-link"} style={{ marginLeft: "auto" }}>
                <Button variant="primary">
                  <AddCircleOutlineIcon sx={{ mr: 1 }} /> Vincular nuevo hidroponico
                </Button>
              </Link>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <TableHydroponics />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </Box>
  );
}