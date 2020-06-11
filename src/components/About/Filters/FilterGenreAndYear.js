import React from 'react';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const FilterGenre = ({ genres, handleChangeYearFrom, handleChangeYearTo, valueTo, valueFrom, handleChangeGenres }) => {
    return (
        <ul>

            <div style={{ display: "flex" }}>
                <div>
                    {genres.map(genre => {
                        return <li key={genre.id}>
                            <input
                                type="checkbox"
                                name={genre.id}
                                onChange={handleChangeGenres}
                            />
                            {genre.name}
                        </li>
                    })}
                </div>
                <Grid item xs >
                    <TextField
                        label="From"
                        margin="normal"
                        placeholder="2010-05-10"
                        style={{ width: 150 }}
                        value={valueFrom}
                        onChange={handleChangeYearFrom}
                        variant="outlined"
                    />
                    <TextField
                        label="To"
                        style={{ width: 150 }}
                        placeholder="2020-05-10"
                        margin="normal"
                        value={valueTo}
                        onChange={handleChangeYearTo}
                        variant="outlined"
                    />
                </Grid>
            </div>
        </ul>
    )
}

export default FilterGenre