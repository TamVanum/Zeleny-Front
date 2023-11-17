import React from 'react';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';

const AButton = ({ label }) => {
  return (
    <Button
      variant="outlined" // Puedes cambiar a "filled" si prefieres un chip relleno
      color="primary" // Cambia el color según tus necesidades
      clickable
    >
        {label}
    </Button>
  );
};

export default AButton;