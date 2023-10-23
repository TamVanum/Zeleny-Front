import PropTypes from 'prop-types';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import { Avatar, Box, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewBudget = (props) => {
  const { difference, positive = false, sx, value, title, color, icon } = props;

  return (
    <Card sx={sx}>
      <Box
        sx={{ height: 20, background: `${color}` }}
      />
      <CardContent>

        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}

        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              {title}
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: `${color}`,
              height: 45,
              width: 45
            }}
          >
            <SvgIcon>
              {icon}
            </SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <CheckIcon /> : <WarningAmberIcon />}
              </SvgIcon>
            </Stack>
            <Typography
              color={positive ? 'success.main' : 'error.main'}
              variant="caption"
            >
              {positive ? "estable" : "alerta"}
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

OverviewBudget.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
