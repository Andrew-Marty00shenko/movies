import React, { useState } from 'react';
import './MoviesList.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Pagination from '../Pagitation/Pagination';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        width: 230,
    },
    media: {
        paddingTop: '56.25%',
        height: 350 // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    btn: {
        marginLeft: 50,
        marginTop: 10
    }
}));

const MoviesList = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(5);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovie = props.movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const classes = useStyles();

    return (
        <>
            <h2 style={{ marginLeft: "10px" }}>What's popular</h2>
            <div className="movies" style={{ marginLeft: "20px" }}>
                {currentMovie.map(item => {
                    return <NavLink to={`/${item.id}`}>
                        <Card key={item.id} style={{ cursor: "pointer" }} className={classes.root}>
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings">

                                    </IconButton>
                                }
                                title={item ? item.title : null}
                                style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                                subheader={item ? item.release_date : null}
                            />
                            <CardMedia
                                className={classes.media}
                                image={`https://image.tmdb.org/t/p/w220_and_h330_face/${item ? item.poster_path : null}`}
                                title={item ? item.title : null}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <span style={{ color: "gold" }}>Оценка:</span>  {item ? item.vote_average : null}
                                </Typography>
                                <Button variant="contained" color="primary" style={{ fontSize: "13px" }} className={classes.btn}>Read more</Button>
                            </CardContent>
                        </Card>
                    </NavLink>
                })}
            </div>
            <Pagination moviesPerPage={moviesPerPage} totalMovies={props.movies.length} paginate={paginate} />
        </>
    );
}

export default MoviesList