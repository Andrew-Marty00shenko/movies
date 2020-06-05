import React, { useEffect, useState } from 'react'
import './Movie.scss'
import { connect } from 'react-redux'
import Rating from '../Rating/Rating'
import { getMovie } from '../../redux/movies-reducer'
import { Button } from '@material-ui/core'

const Movie = (props) => {

    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        let movieId = props.match.params.movieId;
        props.getMovie(movieId);
    })

    return (
        <div className="movie">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.movie ? props.movie.poster_path : null}`} alt="title" />
            </div>
            <div className="movie-desc">
                <h1>{props.movie.title} <span>({props.movie.release_date})</span> </h1>
                <div className="movie-genres">
                    <h3>Жанр:  -<span style={{ color: "#000", fontSize: "15px" }}>{props.movie.genres ? props.movie.genres.map(i => {
                        return <li key={i.id}>{i.name}-   </li>
                    }) : null}</span></h3>
                </div>
                <div className="movie-rait">
                    <h3 >Рейтинг: <span style={{ color: "#000" }}> {props.movie.vote_average}</span></h3>
                </div>
                <div className="movie-overview">
                    <h3 >Описание:</h3>
                    <p>{props.movie.overview}</p>
                </div>
                <div className="post-rait">
                    <h3 >Хотите оценить фильм? </h3>
                    <Button onClick={() => setShowBox(!showBox)} variant="contained" color="primary" style={{ width: "60px", height: "30px" }}>Да</Button>
                    {showBox && <Rating />}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movies.currentMovie
    }
}

export default connect(mapStateToProps, { getMovie })(Movie)