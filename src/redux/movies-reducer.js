import Axios from "axios";

const SET_MOVIES = "SET_MOVIES";

let initialState = {
    movies: []
}

const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.movies
            }
        default:
            return state
    }
}

export const setMovies = (movies) => ({ type: SET_MOVIES, movies })

export const getMovies = () => dispatch => {
    Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ru`)
        .then(res => {
            console.log(res.data);
            dispatch(setMovies(res.data));
        })
}

export default moviesReducer