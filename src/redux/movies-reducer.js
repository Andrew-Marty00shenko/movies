import Axios from "axios";

const SET_MOVIES = "SET_MOVIES";
const GET_CURRENT_MOVIE = "GET_CURRENT_MOVIE";

let initialState = {
    movies: [],
    currentMovie: {}
}

const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.movies
            }
        case GET_CURRENT_MOVIE:
            return {
                ...state,
                currentMovie: action.movieId
            }
        default:
            return state
    }
}

export const setMovies = (movies) => ({ type: SET_MOVIES, movies });
export const getCurrentMovie = (movieId) => ({ type: GET_CURRENT_MOVIE, movieId })

export const getMovies = () => dispatch => {
    Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ru`)
        .then(res => {
            console.log(res.data.results);
            dispatch(setMovies(res.data.results));
        })
}

export const getMovie = (movieId) => dispatch => {
    Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=ru`)
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentMovie(movieId));
        })
}

export default moviesReducer