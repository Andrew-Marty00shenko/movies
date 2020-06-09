import React, { useState } from 'react'
import './About.scss'
import TextField from '@material-ui/core/TextField';
import FiltredMovies from './FiltredMovies/FiltredMovies';
import FilterByYear from './FiltredMovies/FilterByYear';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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


const About = ({ movies }) => {

    const [value, setValue] = useState("");
    const [year, setYear] = useState(null);
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

    const searchFilmByName = movies.filter(data => {
        if (!value)
            return data
        else if (data.title.toLowerCase().includes(value.toLowerCase())) {
            return data
        }
    });

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
                    <FilterByYear movie={movie} />
                    : null
                }
            </div>
        )
    })

    return (
        <div className="about">
            <div className="about-title">
                <h1>Welcome.</h1>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="about-search">
                <TextField
                    label="Search for a film"
                    margin="normal"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    variant="outlined"
                />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap" }}>
                    <FormControl className={classes.formControl}>
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
                            {movies.map(option => {
                                return <MenuItem value={option.release_date}>{option.release_date}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    {filterResByYear}
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap" }}>
                {filterResByNames}
            </div>

        </div>
    )
}

export default About