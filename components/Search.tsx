"use client"

import React from 'react'
import {
    TextField, FormControl,
    InputAdornment,
    createStyles,
    makeStyles
} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';




const Search = () => {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 }
    ]

    const SearchPlaceholder = () => {
        return <SearchIcon />
    }

    return (

        <>
            {/* <input className='border pl-9 pr-20 py-2  search-input-field focus:outline-none focus:border-red-500 cursor-pointer' type="search" name="" id="" placeholder='Search' /> */}

            {/* <Stack sx={{ width: 310 }} className=' bg-white rounded-md' >
                <Autocomplete

                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField

                            {...params}
                            label={[SearchPlaceholder(), "search"]}


                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack> */}

            <TextField
                className='w-[310px] rounded-md bg-white p-0'
                id="filled-multiline-flexible"
                label={[SearchPlaceholder(), "search"]}
                multiline
                maxRows={4}
                variant="filled"

            />


        </>
    )
}

export default Search