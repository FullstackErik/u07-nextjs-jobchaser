import Switch from '@mui/material/Switch';
import { Tooltip } from '@mui/material';
import { ThemeProvider, useColorScheme } from '@mui/material';

export default function SwitchBtn ({handleClick}: {handleClick(): void}) {
    const { mode, setMode } = useColorScheme();
    return (
        
        <Tooltip title="Toggle theme" placement='left'>
            <Switch checked={mode === "dark"} onClick={handleClick} component={"button"}/>
        </Tooltip>
    )
}