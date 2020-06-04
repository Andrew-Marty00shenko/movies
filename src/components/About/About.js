import React from 'react'
import './About.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>Welcome.</h1>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="about-search">
                <TextField id="standard-basic" label="Search for a film" style={{ width: "100%" }} />
                <Button variant="outlined" >
                    Search
                </Button>
            </div>
        </div>
    )
}


export default About