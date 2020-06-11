import React, { useState, useCallback, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FiltredMovies from '../../FiltredMovies/FilterByYear';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 100,
        marginLeft: 20
    },
}));

const FilterYear = ({ movies }) => {

    const [year, setYear] = useState(0);
    const classes = useStyles();

    const handleChange = useCallback((event, newValue) =>
        setYear(newValue), []
    );

    const searchFilmByDate = useMemo(() => {
        return movies.filter(movie => {
            if (!year) return movie;
            else if (movie.release_date.includes(year)) {
                return movie;
            }
        })
    }, [year]);


    const filterResByYear = searchFilmByDate.map(movie => {
        return (
            <div key={movie.id}>
                {year ?
                    <FiltredMovies movie={movie} />
                    : null
                }
            </div>
        )
    });

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
            < div className={classes.root} >
                <Grid item xs style={{ marginTop: 20 }}>
                    Choose dates
                    <Slider
                        value={year}
                        onChange={handleChange}
                        min={2010}
                        max={2020}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                    />
                </Grid>
            </ div>
            {filterResByYear}
        </div >
    )
}

export default FilterYear