import React, { useState, useMemo } from 'react'
import TextField from '@material-ui/core/TextField';
import FiltredMovies from '../../FiltredMovies/FilterByNames';


const FilterName = ({ movies }) => {
    const [value, setValue] = useState("");

    const searchFilmByName = useMemo(() => {
        return movies.filter(data => {
            if (!value) return data;
            else if (data.title.toLowerCase().includes(value.toLowerCase())) {
                return data;
            }
        })
    }, [value]);

    const filterResByNames = searchFilmByName.map(data => {
        return (
            <div key={data.id}>
                {value ?
                    <FiltredMovies data={data} />
                    : null
                }
            </div>
        )
    })

    return (
        <>
            <TextField
                label="Search for a film"
                margin="normal"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="outlined"
            /> <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {filterResByNames}
            </div>
        </>
    )
}

export default FilterName