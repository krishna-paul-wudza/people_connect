import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Outlet } from 'react-router-dom';
import IntroCarousal from './IntroCarousal';

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl"
                sx={{
                    bgcolor: 'pink',
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                        justifyContent: "flex-start",
                        flexGrow: 1,
                        maxWidth: "800px",
                        height: "80%",
                        maxHeight: "1000px",
                        margin: "auto"
                    }}>
                    <Grid container spacing={2} sx={{ flex: "1" }}>
                        <Grid xs={12} sm={6} sx={{ bgcolor: "blue" }}>
                            <IntroCarousal />
                        </Grid>
                        <Grid xs={12} sm={6} sx={{}}>
                            <Outlet />

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>

    )
}

export default Home