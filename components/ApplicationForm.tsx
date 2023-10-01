"use client"

import { Box, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import fileCrossIcon from '../public/assets/file-cross.svg'
import dragDrop from '../public/assets/drag-drop.svg'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import Calender from './Calender'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});



const ApplicationForm = () => {

    const [vacation, setVacation] = React.useState('');
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());

    const handleChange = (event: SelectChangeEvent) => {
        setVacation(event.target.value);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <form className='pb-12 application-form'>
            <div className="mb-16">
                <Typography variant='h5' sx={{ marginBottom: '8px', fontSize: '20px', fontWeight: '500' }}>Application Form</Typography>
                <Typography variant='subtitle1'>Please fill the below form to apply</Typography>

            </div>
            <div className="flex  mb-16 gap-12" >
                {/* Form input field */}
                <div className='flex flex-col justify-between '>
                    {/* Form All input field */}
                    <div className="flex gap-[34px] ">
                        <label htmlFor="vacation">
                            Leave Type <span className="text-[#FF5449]">*</span>
                        </label>

                        <FormControl sx={{ minWidth: "296px", backgroundColor: 'white' }}>
                            <Select
                                value={vacation}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                        </FormControl>
                    </div>


                    <div className="flex justify-between ">
                        <label htmlFor="from-date">
                            From Date <span className="text-[#FF5449]">*</span>
                        </label>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}  >
                                <DemoContainer components={['DatePicker']} sx={{ paddingTop: '0' }}>
                                    <DatePicker value={value}
                                        onChange={(newValue) => setValue(newValue)} sx={{ width: '295px', backgroundColor: "white" }} />
                                </DemoContainer>

                            </LocalizationProvider>
                            <FormControlLabel control={<Checkbox />} label="One day only" />
                        </div>

                    </div>


                    <div className="flex justify-between ">
                        <label htmlFor="from-date">
                            To Date <span className="text-[#FF5449]">*</span>
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}  >
                            <DemoContainer components={['DatePicker']} sx={{ paddingTop: '0' }}>
                                <DatePicker
                                    sx={{ width: '295px', backgroundColor: 'white' }} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    <div className="flex justify-between ">
                        <label htmlFor="vacation">
                            Day Part <span className="text-[#FF5449]">*</span>
                        </label>

                        <FormControl sx={{ minWidth: "296px", backgroundColor: 'white' }}>
                            <Select
                                value={vacation}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                        </FormControl>
                    </div>
                </div>

                {/* Calender */}
                <div className=''>
                    <Calender />
                </div>
            </div>

            {/* Upload document area */}
            <div>
                <p className="mb-4">Upload Document</p>

                <div className="flex gap-8">

                    {/* Upload document submit area */}
                    <div className="border-2 py-8 px-10 border-dashed border-[#AFC6FF] bg-[#FEFBFF] text-center cursor-pointer">
                        {/* <Image src={dragDrop} alt="" className='inline-block' /> */}
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ marginBottom: '8px' }}>
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        <h3 className='mb-1 text-[14px] font-semibold'>Drag & drop files</h3>
                        <Typography variant='subtitle1' color='gray' fontSize='12px'>
                            Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD,
                            AI, Word, PPT
                        </Typography>
                    </div>

                    {/* uploaded files preview */}
                    <div className=" flex gap-4 self-end ">
                        <div className="py-4 bg-white border-2 rounded-sm  text-center cursor-pointer">
                            <Image src={fileCrossIcon} alt="" className="inline-block" />
                            <p>your-file-here.PDF</p>
                        </div>
                        <div className="py-4 bg-white border-2 rounded-sm  text-center cursor-pointer">
                            <Image src={fileCrossIcon} alt="" className="inline-block" />
                            <p>your-file-here.PDF</p>
                        </div>
                        <div className="py-4 bg-white border-2 rounded-sm  text-center cursor-pointer">
                            <Image src={fileCrossIcon} alt="" className="inline-block" />
                            <p>your-file-here.PDF</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ApplicationForm