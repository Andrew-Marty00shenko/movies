import React, { useState, useEffect, useCallback } from 'react'
import Header from './components/Header/Header';
import MoviesList from './components/MoviesList/MoviesList';
import { Route } from 'react-router-dom';
import Movie from '././components/Movie/Movie'
import About from './components/About/About';
import Axios from 'axios';
import { getCountryCode } from './API/API';

const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [moviesForFilt, setMoviesForFilt] = useState([]);
  const [selectMovies, setSelectMovies] = useState([]);
  const [yearFrom, setYearFrom] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    getCountryCode().then(code => {
      Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&query=whiplash&language=${code.toLowerCase()}&region=${code}`)
        .then(res => {
          setMovies(res.data.results.slice(0, 5));
        })
    });
    Axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=ru`)
      .then(res => {
        setGenres(res.data.genres);
      })
    Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ru-US&sort_by=popularity.desc&include_adult=false&include_video=false`)
      .then(res => {
        setMoviesForFilt(res.data.results);
      })
  }, []);

  const genresNames = useCallback(e => {
    if (e.target.checked) {
      setSelectedGenres(moviesForFilt.filter(movie => movie.genre_ids.include(e.target.name)));
      updateMovies(selectedGenres);
    }
  }, [selectedGenres]);

  const yearFromFilter = useCallback((event) => {
    setYearFrom(event.target.value);
  }, []);

  const updateMovies = (genresNames, yearFrom, yearTo) => {
    debugger
    Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ru-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genresNames}`)
      .then(res => {
        setSelectMovies(res.data.results);
        console.log(res.data)
      })
  }

  return (
    <div className="app-wrapper">
      <Header />
      <About selectMovies={selectMovies} yearFromFilter={yearFromFilter} yearFrom={yearFrom} moviesForFilt={moviesForFilt} genres={genres} genresNames={genresNames} />
      <Route exact path="/" render={() => <MoviesList movies={movies} />} />
      <Route exact path="/movies/:movieId?" render={(props) => <Movie movieId={props.match.params.movieId} api_key={api_key} />} />
    </div>
  )
}

export default App