"use client";
import { useContext, createContext, useState, ReactNode } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

type ThemeContextType = {
    mode: "light" | "dark",
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
};

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const theme = createTheme({
        palette: {
            mode,
        },
    });

    const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}