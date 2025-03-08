import './JobItem.css'
import Grid from "@mui/material/Grid2"
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Divider } from "@mui/material"

type JobItemProps = {
    logo: string,
    company: string,
    position: string,
    location: string,
    level: string,
    website: string
}
function JobItem({ logo, company, position, location, level, website }: JobItemProps) {
    return (
        <Grid size={{xs: 12, sm: 6, md: 3}}>
        <Card sx={{ height: "100%", p: 1}} elevation={14} className='MuiCard-root'>
            {/* <CardMedia 
                className='MuiCardMedia-img'
                component="img" 
                image={logo}
                alt={`Logo: ${company}`}
            /> */}
            <CardContent sx={{p: 0}}>
                <Typography sx={{marginBottom: "10px", marginTop: "5px", textAlign: "center"}} variant='h5' component="p">
                    {company}
                </Typography>
                <Divider/>
                <Typography sx={{m: "5px 0 5px 10px", fontSize: 17}}>
                    {position}
                </Typography>
                <Divider/>
                <Typography sx={{m: "5px 0 5px 10px", fontSize: 16, wordWrap: "break-word"}}>
                    {level}
                </Typography>
                <Divider/>
                <Typography sx={{m: "5px 0 5px 10px", fontSize: 14}}>
                    {location}
                </Typography>
            </CardContent>
            <CardActions sx={{p: 0, marginTop: "auto"}}>
                <Button onClick={() => window.open(website)}>Learn more</Button>
            </CardActions>
        </Card>
        </Grid>
    )
}

export default JobItem;