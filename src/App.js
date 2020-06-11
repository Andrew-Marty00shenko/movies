import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import MoviesList from './components/MoviesList/MoviesList';
import { Route } from 'react-router-dom';
import Movie from '././components/Movie/Movie'
import About from './components/About/About';
import Axios from 'axios';
import { getCountryCode } from './API/API';
import Recomended from './components/RecomendedMovies/Recomended';

const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getCountryCode().then(code => {
      Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&query=whiplash&language=${code.toLowerCase()}&region=${code}`)
        .then(res => {
          setMovies(res.data.results.slice(0, 5));
        });
      Axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=${code.toLowerCase()}`)
        .then(res => {
          setGenres(res.data.genres);
        });
    });
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <Route exact path="/" render={() => <About genres={genres} />} />
      <Route exact path="/" render={() => <MoviesList movies={movies} />} />
      <Route path="/movies/:movieId?" render={(props) => <Movie movieId={props.match.params.movieId} api_key={api_key} />} />
      <Route path="/recommended" render={() => <Recomended genres={genres} />} />
    </div>
  )
}

export default App