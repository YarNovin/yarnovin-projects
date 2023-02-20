import React from 'react';
import YarnovinProject from './projects';
import * as Yarnovin from './project';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../assets/css/style.css';


export default function YarnovinProjectsIndex() {
    return (
        <>
            {
                /**
                 * Yarnovin Projects   
                 */
            }
            <Box mt={2}>
                <Typography fontFamily='VazirMatnLight' fontWeight='bold' variant="h4" align='center' component="h4">
                    <div className='hr'>
                        پروژه های مجموعه یارنوین
                    </div>
                </Typography>
            </Box>
            <Box mt={3}>
                <Grid container spacing={2} columns={{ xs: 2, sm: 8, md: 12 }}>
                    {
                        Yarnovin.InformationProjects.map((el, index) => (
                            <Grid xs={2} mb={4} md={3} key={index}>
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