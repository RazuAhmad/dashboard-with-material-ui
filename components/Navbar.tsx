

import { Box, Grid } from '@mui/material'
import Container from '@mui/material/Container';
import Image from 'next/image'
import navLogo from '../public/assets/navlogo.svg'
import React from 'react'
import Search from './Search'
import UserNotification from './UserNotification'


const Navbar = () => {

    return (
        <Box sx={{ backgroundColor: '#2C72E9', padding: "13px 24px 13px 17px" }} >

            <Container maxWidth="xl">

                <Grid container justifyContent='space-between' alignItems="center">
                    <Grid item md={6}>
                        <Image src={navLogo} alt='' />
                    </Grid>

                    <Grid item md={6}>
                        <div className='flex justify-end gap-16'>
                            <Search />
                            <UserNotification />


                        </div>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default Navbar