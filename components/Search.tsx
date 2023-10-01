"use client"

import React from 'react'



import SearchIcon from '@mui/icons-material/Search';
import { Paper } from '@mui/material';


const Search = () => {
    return (
        <Paper className=' pl-2 cursor-pointer' elevation={1}>
            <SearchIcon />
            <input className='focus:outline-none pr-12 pl-4  py-2 rounded-md cursor-pointer' type="search" name="" id="" placeholder='Search' />
        </Paper>

    )
}

export default Search