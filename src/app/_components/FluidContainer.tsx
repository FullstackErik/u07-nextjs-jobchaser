import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

export default function FluidContainer({children}: {children: React.ReactElement}) {
  return (
    <>
      <CssBaseline />
      {/* box behövs inte? */}
      <Container maxWidth="xl" disableGutters>
      
          {children}
       
      </Container>
    </>
  );
}