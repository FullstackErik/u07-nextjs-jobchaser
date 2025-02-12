"use client"

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
import { useColorScheme } from '@mui/material';


export default function Header() {
  const { mode, setMode } = useColorScheme();

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
          <SwitchBtn handleClick={() => {setMode(mode !== "light" ? "light" : "dark")}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
