import React from 'react';
import YarnovinProject from './projects';
import * as Yarnovin from './project';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../assets/css/style.css';
import { createTheme } from '@mui/system';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    }
})

export default function YarnovinProjectsIndex() {
    return (
        <>
            {
                /**
                 * Yarnovin Projects   
                 */
            }
            <Box mt={2}>
                <Typography fontFamily={'VazirMatnLight'} fontWeight='bold' variant="h4" align='center' component="h4">
                    <div className='hr'>
                        پروژه های مجموعه یارنوین
                    </div>
                </Typography>
            </Box>
            <Box mt={3}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        Yarnovin.InformationProjects.map((el, index) => (
                            <Grid item xs={2} sm={4} md={3} key={index}>
                                <YarnovinProject
                                    project_name={el.title} project_bio={el.bio}
                                    project_src={el.src} image_src={el.title}
                                    is_popular={el.popular_porject}
                                    is_incoming={el.incoming}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    );
}