import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const Calender = () => {


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar sx={{
                boxShadow: "4px 4px 13px gray",
                '.MuiDateCalendar-root': { backgroundColor: 'white' },
                '.MuiDayCalendar-header': { backgroundColor: 'white' },
                ' .MuiDayCalendar-slideTransition': {

                    backgroundColor: 'white',
                    // minHeight: '231px',



                }
            }} />
        </LocalizationProvider>
    )
}

export default Calender