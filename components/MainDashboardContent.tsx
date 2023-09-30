import React from 'react'
import AllLeaveCategories from './AllLeaveCategories'
import { Box } from '@mui/material'

import ApplicationFormTab from './ApplicationFormTab'

const MainDashboardContent = () => {
    return (
        <Box className="pt-9 pr-[121px] pl-[42px]">
            <AllLeaveCategories />

            <ApplicationFormTab />
        </Box>
    )
}

export default MainDashboardContent