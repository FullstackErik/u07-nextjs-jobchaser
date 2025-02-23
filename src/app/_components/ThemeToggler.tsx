import Switch from '@mui/material/Switch';
import { Tooltip, useColorScheme } from '@mui/material';

export default function SwitchBtn ({handleClick}: {handleClick(): void}) {
    const { mode } = useColorScheme();
    return (
        
        <Tooltip title="Toggle theme" placement='left'>
            <Switch checked={mode === "dark"} onClick={handleClick} component={"button"}/>
        </Tooltip>
    )
}