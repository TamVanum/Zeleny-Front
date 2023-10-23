import { Box, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { SensorDataCard } from '../components/SensorDataCard'
import { amber, blue, cyan, orange, pink, red, yellow } from '@mui/material/colors'
import SensorsIcon from '@mui/icons-material/Sensors';
import { OverviewBudget } from '../components/CustomBudget';
import Chart from '../components/chart';

export default function Dashboard() {
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
        <Container maxWidth="x-lg" sx={{ mt: 10, mb: 4 }}>

          <Grid container spacing={6}>
            <Grid item xs={12} md={4} lg={4}>

              <OverviewBudget
                title={"Flujo del agua"}
                difference={1}
                positive
                color={blue[500]}
                icon={<SensorsIcon />}
                sx={{ height: '100%', borderRadius: 4 }}
                value="data"
              />

            </Grid>
            <Grid item xs={12 } md={4} lg={4}>
              <OverviewBudget
                title={"Temperatura del agua"}
                difference={1}
                positive
                color={cyan[600]}
                icon={<SensorsIcon />}
                sx={{ height: '100%', borderRadius: 4 }}
                value="data"
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <OverviewBudget
                title={"Temperatura ambiente"}
                difference={1}
                color={red[600]}
                icon={<SensorsIcon />}
                sx={{ height: '100%', borderRadius: 4 }}
                value="data"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <OverviewBudget
                title={"Nivel de ph"}
                difference={1}
                positive
                color={amber[600]}
                icon={<SensorsIcon />}
                sx={{ height: '100%', borderRadius: 4 }}
                value="data"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <OverviewBudget
                title={"Niveles de amoniaco"}
                difference={1}
                positive
                color={pink[600]}
                icon={<SensorsIcon />}
                sx={{ height: '100%', borderRadius: 4 }}
                value="data"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Chart />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                sx={{
                  height: "100%",
                  backgroundColor: "black",
                  borderRadius: 4,
                  position: "relative"
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    height:400,
                    top: 0,
                    left: 0,
                    color: "white",
                    padding: 2
                  }}
                >
                  NO VIDEO
                </Typography>
              </Box>
            </Grid>
          </Grid>

        </Container>

      </Box>
    </Box>

  )
}
