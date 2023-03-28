import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import '../assets/css/style.css';

const pages = [
    {
        menu_name: 'سرویس ها',
        src: 'services'
    },
    {
        menu_name: 'تماس با ما',
        src: 'contact-us'
    }
];

function ResponsiveAppBar() {
    return (
        <AppBar sx={{ bgcolor: 'blueviolet' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 1,
                            fontFamily: 'VazirMatnLight',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        یارنوین
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, direction: 'ltr' }}>
                        {
                            pages.map((el, index) => (
                                <Button size="large">
                                    <Typography fontWeight={700} fontFamily='VazirMatnLight'>
                                        <a href={el.src} style={{ color: 'white', textDecoration: 'none' }}>
                                            {el.menu_name}
                                        </a>
                                    </Typography>
                                </Button>
                            ))
                        }
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {
                            pages.map((el, index) => (
                                <Button size="large">
                                    <Typography fontWeight={700} fontFamily='VazirMatnLight'>
                                        <a href={el.src} style={{ color: 'white', textDecoration: 'none' }}>
                                            {el.menu_name}
                                        </a>
                                    </Typography>
                                </Button>
                            ))
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;