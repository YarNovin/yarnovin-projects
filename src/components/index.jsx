import React from 'react';
import YarnovinProject from './projects';
import * as Yarnovin from './project';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../assets/css/style.css';
import ResponsiveAppBar from './Appbar';


export default function YarnovinProjectsIndex() {
    return (
        <>
            {<ResponsiveAppBar />}
            <br />
            <Box>
                <Grid container spacing={{ xs: 4, md: 2 }} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    {
                        Yarnovin.InformationProjects.map((el, index) => (
                            <Grid item xs={12} sm={4} md={2} key={index}>
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