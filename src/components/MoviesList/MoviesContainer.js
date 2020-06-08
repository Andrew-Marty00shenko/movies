import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies, getMovie } from '../../redux/movies-reducer';
import MoviesList from './MoviesList';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const MoviesContainer = (props) => {

    useEffect(() => {
        let movieId = props.match.params.movieId;
        props.getMovie(movieId);
        props.getMovies();
    })

    return <MoviesList {...props} movies={props.movies} />
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
    }
}

export default compose(
    connect(mapStateToProps, { getMovies, getMovie }),
    withRouter
)(MoviesContainer)
