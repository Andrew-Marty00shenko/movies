import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 100,
        marginLeft: 20
    },
}));

const FilterYear = ({ value, handleChange, valueTo, handleChangeTo }) => {
    const classes = useStyles();

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
            < div className={classes.root} >
                <Grid item xs style={{ marginTop: 20 }}>
                    Choose dates
                    <TextField
                        label="From"
                        margin="normal"
                        style={{ width: 150 }}
                        value={value}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <TextField
                        label="To"
                        style={{ width: 150 }}
                        margin="normal"
                        value={valueTo}
                        onChange={handleChangeTo}
                        variant="outlined"
                    />
                </Grid>
            </ div>
        </div >
    )
}

export default FilterYear