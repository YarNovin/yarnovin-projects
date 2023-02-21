import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import '../assets/css/style.css';

const pages = ['تماس با ما', 'درباره ما', 'سرویس ها'];

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
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ color: 'white' }}
                            >
                                <Typography fontWeight={700} fontFamily={'VazirMatnLight'}>
                                    {page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ color: 'white' }}
                            >
                                <Typography fontWeight={700} fontFamily={'VazirMatnLight'}>
                                    {page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;