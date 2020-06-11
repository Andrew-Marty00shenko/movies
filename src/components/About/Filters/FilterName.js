import React from 'react'
import TextField from '@material-ui/core/TextField';

const FilterName = ({ value, handleChange }) => {

    return (
        <>
            <TextField
                label="Search for a film"
                margin="normal"
                value={value}
                onChange={handleChange}
                variant="outlined"
            />
        </>
    )
}

export default FilterName