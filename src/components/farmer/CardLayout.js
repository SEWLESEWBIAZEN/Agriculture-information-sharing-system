import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardLayout = ({ img, title, count, link, description }) =>
{
    return (
        <Card elevation={0} sx={{ width: 400 }}>
            <CardMedia
                sx={{ borderRadius: '0.5rem', width: 200, height: 100, marginLeft: '5rem', marginTop: '1rem' }}
                image={img}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                    {title}
                </Typography>
                <Typography gutterBottom variant="body1">
                    {description}
                </Typography>
                {count ? (<Typography variant="body2" color="text.secondary">
                    No of Ads:{count}
                </Typography>) : (<div></div>)

                }

            </CardContent>
            <CardActions>

                <a href={link} size="small">Learn More</a>
            </CardActions>
        </Card>
    );
}

export default CardLayout
