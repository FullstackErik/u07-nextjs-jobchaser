import Switch from '@mui/material/Switch';
import { Tooltip } from '@mui/material';

export default function SwitchBtn ({handleClick}: {handleClick(): void}) {
    return (
        
        <Tooltip title="Toggle theme" placement='left'>
            <Switch onClick={handleClick} component={"button"}/>
        </Tooltip>
    )
}