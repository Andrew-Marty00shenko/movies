import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
    root: {
        width: 500,
        marginLeft: "30%"
    }
});

const Pagination = (props) => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalMovies / props.moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            style={{ height: 50 }}>
            {pageNumbers.map(number => {
                return <BottomNavigationAction
                    onClick={() => props.paginate(number)}
                    label={number} value={number}
                />
            })}
        </BottomNavigation>
    );
}

export default Pagination