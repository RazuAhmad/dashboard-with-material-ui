

import React from 'react'
import { Container, Box, Grid, } from '@mui/material'
import Sidebar from './Sidebar'

import MainDashboardContent from './MainDashboardContent'


const DashboardArea = () => {




    return (
        <Box  >
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item md={2}>
                        <div className="border-r-2 h-full">
                            <Sidebar />
                        </div>
                    </Grid>
                    <Grid item md={10}>
                        <div>
                            <MainDashboardContent />

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default DashboardArea