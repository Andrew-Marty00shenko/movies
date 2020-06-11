import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        marginLeft: 20,
        marginTop: 20
    },
}));

const FilterYear = ({ value, handleChange }) => {
    const classes = useStyles();

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
            < div className={classes.root} >
                Select year
                <Slider
                    value={value}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    max={2020}
                    min={1800}
                    onChange={handleChange} />
            </ div>
        </div >
    )
}

export default FilterYear