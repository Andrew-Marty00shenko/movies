import React, { useState } from 'react'
import './About.scss'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom'

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

const About = (props) => {
    const [value, setValue] = useState(null);
    const classes = useStyles();

    const searchFilm = props.movies.filter(data => {
        if (value == null)
            return data
        else if (data.title.toLowerCase().includes(value.toLowerCase())) {
            return data
        }
    }).map(data => {
        return (
            <div>
                {value ?
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
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={props.movies.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search for a film"
                            margin="normal"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            variant="outlined"
                        />
                    )}
                />

            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap" }}>
                {searchFilm}
            </div>
        </div>
    )
}

export default About