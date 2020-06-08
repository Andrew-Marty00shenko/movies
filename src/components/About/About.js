import React, { useState } from 'react'
import './About.scss'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FiltredMovies from './FiltredMovies/FiltredMovies';



const About = ({ movies }) => {
    const [value, setValue] = useState(null);


    const searchFilm = movies.filter(data => {
        if (!value)
            return data
        else if (data.title.toLowerCase().includes(value.toLowerCase())) {
            return data
        }
    });

    const filterRes = searchFilm.map(data => {
        return (
            <div>
                {value ?
                    <FiltredMovies data={data} />
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
                    options={movies.map((option) => option.title)}
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
                {filterRes}
            </div>
        </div>
    )
}

export default About