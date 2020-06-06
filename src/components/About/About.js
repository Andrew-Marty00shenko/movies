import React from 'react'
import './About.scss'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const About = (props) => {

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
                            variant="outlined"
                        />
                    )}
                />
            </div>
        </div>
    )
}

export default About