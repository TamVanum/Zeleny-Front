import React from 'react';
import { Avatar, Box, Stack, SvgIcon, Typography } from '@mui/material';

export const SensorDataCard = (props) => {
  const { positive = false, sx, value, title, color, icon } = props;

  return (
    <Box>
      
      <Typography variant="overline" sx={{ml:12}}>{title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
          sx={sx}
        >
          <Avatar
            sx={{
              backgroundColor: color,
              height: 65,
              width: 65,
            }}
          >
            <SvgIcon fontSize='large'>{icon}</SvgIcon>
          </Avatar>
          <Stack spacing={1}>
            <Typography variant="h2">{value}</Typography>
          </Stack>

        </Stack>
      </Box>
    </Box>
  );
};