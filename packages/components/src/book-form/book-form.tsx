import { NewBook } from '@moon-app/db/src/schema'
import { Box, TextField } from '@mui/material'
import React from 'react'

export const BookForm = ({ onSubmit }: { onSubmit: (book: NewBook) => void }) => {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
                e.preventDefault()

                const {
                    name,
                    author,
                    yearAsString,
                    genre
                } = Object.fromEntries(new FormData(e.currentTarget).entries()) as { 
                    [key: string]: string
                }

                onSubmit({
                    name: name,
                    author: author,
                    year: parseInt(yearAsString),
                    genre: genre
                })
            }}
        >
            <div>
                <TextField
                    required
                    name="name"
                    id="outlined-required"
                    label="Name"
                />
                <TextField
                    disabled
                    name="author"
                    id="outlined-disabled"
                    label="Author"

                />
                <TextField
                    id="outlined-password-input"
                    name="genre"
                    label="Genre"
                    type="text"
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Year"
                    name="year"
                />
            </div>
        </Box>
    )
}