import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

export default function FluidContainer({ children }: { children: React.ReactElement }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters>
        {children}
      </Container>
    </>
  );
}