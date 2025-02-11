import Switch from '@mui/material/Switch';
import { Tooltip } from '@mui/material';

export default function SwitchBtn ({handleClick}: {handleClick(): void}) {
    return (
        // kanske styla tooltipet?
        <Tooltip title="Toggle theme" placement='left'>
            <Switch onClick={handleClick}/>
        </Tooltip>
    )
}