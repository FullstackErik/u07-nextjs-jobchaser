"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SwitchBtn from './ThemeToggler';
import PositionedMenu from './MenuDropDown';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeWrapper from './ThemeWrapper';
import { useThemeContext } from '@/context/ThemeContext';


export default function Header() {
  const { toggleMode } = useThemeContext();

  const pathName = usePathname().slice(1) || "home";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <PositionedMenu/>
          {pathName !== "home" ? 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <Link href="/"><HomeIcon/></Link>
          </IconButton> : null}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pathName}
          </Typography>
          {/* fixa så knappen syns när togglad. (kanske löser sig med dark mode) */}
          <SwitchBtn handleClick={toggleMode}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
