"use client"

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ApplicationForm from './ApplicationForm';
import LeaveStatus from './LeaveStatus';
import Balance from './Balance';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{
                    backgroundColor: "#F2F0F4", paddingLeft: "80px", paddingRight: '163px', paddingTop: '24px',

                }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ApplicationFormTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft: '80px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="New Leave" {...a11yProps(0)} />
                    <Tab label="Leave Status" {...a11yProps(1)} />
                    <Tab label="Balance" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}  >

                <ApplicationForm />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <LeaveStatus />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Balance />
            </CustomTabPanel>
        </Box>
    );
}