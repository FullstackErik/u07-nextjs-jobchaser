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

export default function ButtonAppBar({children}: {children: string}) {
  // const pathname = usePathname() || "home";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <PositionedMenu/>
          {children !== "home" ? 
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
            {/* kanske ska vara children? ska visa olika beroende på vilken page man är på */}
            {children}
          </Typography>
          {/* fixa så knappen syns när togglad. (kanske löser sig med dark mode) */}
          <SwitchBtn/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
