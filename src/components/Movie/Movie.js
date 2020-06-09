import React, { useEffect, useState } from 'react'
import './Movie.scss'
import Rating from '../Rating/Rating'
import { Button } from '@material-ui/core'
import Axios from 'axios'

// const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const Movie = ({ api_key, movieId }) => {

    const [showBox, setShowBox] = useState(false);
    const [currentMovie, setCurrentMovie] = useState({});

    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=ru`)
            .then(res => {
                setCurrentMovie(res.data);
            })
    }, []);

    const popUp = () => {
        setShowBox(!showBox);
    }

    return (
        <div className="movie">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${currentMovie ? currentMovie.poster_path : null}`} alt="title" />
            </div>
            <div className="movie-desc">
                <h1>{currentMovie.title} <span>({currentMovie.release_date})</span> </h1>
                <div className="movie-genres">
                    <h3>Жанр:  -<span style={{ color: "#000", fontSize: "15px" }}>{currentMovie.genres ? currentMovie.genres.map(i => {
                        return <li key={i.id}>{i.name}-   </li>
                    }) : null}</span></h3>
                </div>
                <div className="movie-rait">
                    <h3 >Рейтинг: <span style={{ color: "#000" }}> {currentMovie.vote_average}</span></h3>
                </div>
                <div className="movie-overview">
                    <h3 >Описание:</h3>
                    <p>{currentMovie.overview}</p>
                </div>
                <div className="post-rait">
                    <h3 >Хотите оценить фильм? </h3>
                    <Button onClick={popUp} variant="contained" color="primary" style={{ width: "60px", height: "30px" }}>Да</Button>
                    {showBox && <Rating movieId={movieId} api_key={api_key} />}
                </div>
            </div>
        </div>
    )
}

export default Movie