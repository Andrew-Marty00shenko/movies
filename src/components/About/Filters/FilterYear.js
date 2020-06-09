import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FiltredMovies from './FiltredMovies/FilterByYear';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const FilterYear = ({ movies }) => {

    const [year, setYear] = useState("");
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const searchFilmByDate = movies.filter(movie => {
        if (!year) return movie;
        else if (movie.release_date.includes(year)) {
            return movie;
        }
    })

    const filterResByYear = searchFilmByDate.map(movie => {
        return (
            <div key={movie.id}>
                {year ?
                    <FiltredMovies movie={movie} />
                    : null
                }
            </div>
        )
    })

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
            <FormControl className={classes.formControl} >
                <InputLabel id="demo-controlled-open-select-label">Release date</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={year}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {movies.slice(1, 3).map(option => {
                        return <MenuItem key={option.id} value={option.release_date.substr(0, 4)}>{option.release_date.substr(0, 4)}</MenuItem>
                    })}
                </Select>
            </FormControl>
            {filterResByYear}
        </div>
    )
}

export default FilterYear