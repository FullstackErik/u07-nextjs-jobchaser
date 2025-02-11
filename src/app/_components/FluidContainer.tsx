import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function FluidContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* box behövs inte? */}
      {/* <Container maxWidth="xl" disableGutters>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container> */}
    </React.Fragment>
  );
}