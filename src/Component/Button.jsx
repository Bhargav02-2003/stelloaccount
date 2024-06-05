import * as React from 'react';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
export default function Buttons({type,content}) {
  const color = blue[50];
  return (
    <Button  variant="contained" disableElevation type={type}sx={{ backgroundColor: color, color: 'black',fontWeight:"550" , 
    '&:hover': {
      backgroundColor: '#bbdefb',
      color: 'black',
      boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)" 
      // Adjust text color for better contrast, if needed
    } 
    }}>
    {content}
    
    </Button>
  );
}
