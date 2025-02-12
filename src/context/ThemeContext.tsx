"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    
    return (
            <ThemeProvider theme={theme} defaultMode="light">
                <CssBaseline />
                {children}
            </ThemeProvider>
    );
}