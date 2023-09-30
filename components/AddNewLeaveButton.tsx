"use client"

import Image from "next/image";
import plusIcon from "../public/assets/plus-icon.svg";
import { Button, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
const AddNewLeaveButton = () => {
    return (
        <Box sx={{ marginBottom: '64px' }}>
            <Button component="label" variant="outlined" className="w-full py-[10px] justify-start gap-2" startIcon={<AddIcon />} >
                <span className="font-medium">Add New Leave</span>

            </Button>
        </Box>
    )
}

export default AddNewLeaveButton