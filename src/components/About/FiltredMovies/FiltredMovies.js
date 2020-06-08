import React from 'react';
import { NavLink } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

const FiltredMovies = ({ data }) => {

    const classes = useStyles();

    return (
        <ul >
            <li >
                <NavLink to={`movies/${data.id}`}>
                    <Card key={data.id} style={{ cursor: "pointer" }} className={classes.root}>
                        <CardHeader
                            title={data ? data.title : null}
                            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                            subheader={data ? data.release_date : null}
                        />
                        <CardMedia
                            className={classes.media}
                            image={`https://image.tmdb.org/t/p/w220_and_h330_face/${data ? data.poster_path : null}`}
                            title={data ? data.title : null}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <span style={{ color: "gold" }}>Оценка:</span>  {data ? data.vote_average : null}
                            </Typography>
                        </CardContent>
                    </Card>
                </NavLink>
            </li>
        </ul>
    )
}

export default FiltredMovies