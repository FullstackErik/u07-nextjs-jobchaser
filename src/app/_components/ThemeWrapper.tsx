import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useThemeContext } from '@/context/ThemeContext';

export default function ThemeWrapper({ children }: { children: React.ReactNode; }) {
    const { mode } = useThemeContext();
    const theme = createTheme({
        palette: {
            mode,
        },
    });
    return (
        
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}