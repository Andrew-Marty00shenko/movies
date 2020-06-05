import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../redux/movies-reducer';
import MoviesList from './MoviesList';

const MoviesContainer = (props) => {

    useEffect(() => {
        props.getMovies();
    }, [])

    return <MoviesList {...props} movies={props.movies} />
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}

export default connect(mapStateToProps, { getMovies })(MoviesContainer)