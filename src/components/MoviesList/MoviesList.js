import React from 'react';
import './MoviesList.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        width: 250,
    },
    media: {
        paddingTop: '56.25%',
        height: '50px' // 16:9
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
}));

const MoviesList = (props) => {
    const classes = useStyles();

    return (
        <>
            <h2>What's popular</h2>
            <div className="movies" style={{ marginLeft: "20px" }}>
                {props.movies.map(item => {
                    return <Card key={item.id} className={classes.root}>
                        <CardHeader
                            action={
                                <IconButton aria-label="settings">

                                </IconButton>
                            }
                            title={item ? item.title : null}
                            subheader={item ? item.release_date : null}
                        />
                        <CardMedia
                            className={classes.media}
                            image={item ? item.backdrop_path : null}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Оценка: {item ? item.vote_average : null}
                            </Typography>
                        </CardContent>
                    </Card>
                })}
            </div>
        </>
    );
}

export default MoviesList