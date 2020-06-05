import React, { useEffect } from 'react'
import './Movie.scss'
import { connect } from 'react-redux'
import { getMovie } from '../../redux/movies-reducer'

const Movie = (props) => {

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