import Switch from '@mui/material/Switch';
import { Tooltip } from '@mui/material';

export default function SwitchBtn () {
    return (
        // kanske styla tooltipet?
        <Tooltip title="Toggle theme" placement='left'>
            <Switch/>
        </Tooltip>
    )
}