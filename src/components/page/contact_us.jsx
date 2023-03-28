import React from 'react';
import ResponsiveAppBar from '../Appbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Link from '@mui/material/Link';

const social_media = [
    { name: 'تلگرام', href: 'https://t.me/YarNovin', img: require('../../assets/images/social_media/telegram.png') },
    { name: 'گیت هاب', href: 'https://github.com/YarNovin/', img: require('../../assets/images/social_media/github.png') },
    { name: 'وبسایت', href: 'https://yarnovin.ir', img: require('../../assets/images/social_media/internet.png') }
];

export default function contact_us() {
    return (
        <>
            <ResponsiveAppBar />
            <center>
                <Box marginTop={3} justifyContent='center'>
                    <Grid container spacing={{ xs: 4, md: 2 }} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                        {
                            social_media.map((el, index) => (
                                <Grid item xs={12} sm={4} md={2} key={index}>
                                    <Card style={{ height: '100%' }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={el.img}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom fontFamily='VazirMatnLight' variant="h5" component="div" fontWeight='bold' display='inline-block'>
                                                {el.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button size="large">
                                                <Typography fontWeight='bold' fontFamily='VazirMatnLight'>
                                                    <Link href={el.href} style={{ textDecoration: 'none' }}>
                                                        مشاهده
                                                    </Link>
                                                </Typography>
                                            </Button>
                                        </CardActions>
                                    </Card >
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </center>
        </>
    );
}