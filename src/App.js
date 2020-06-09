import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import MoviesList from './components/MoviesList/MoviesList';
import { Route } from 'react-router-dom';
import Movie from '././components/Movie/Movie'
import About from './components/About/About';
import Axios from 'axios';
import { setCountryCode } from './API/API';

const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectMovies, setSelectMovies] = useState([]);

  useEffect(() => {
    setCountryCode().then(code => {
      Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&query=whiplash&language=${code.toLowerCase()}&region=${code}`)
        .then(res => {
          setMovies(res.data.results.slice(0, 5));
        })
    });
    Axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=ru`)
      .then(res => {
        setGenres(res.data.genres);
      })
  }, []);

  const updateMovies = (e) => {
    if (e.target.checked) {
      const currState = [...movies];
      const newState = currState.filter(movie => movie.genre_ids.includes(parseInt(e.target.name)));
      setSelectMovies(newState);
    }
  }
  return (
    <div className="app-wrapper">
      <Header />
      <About selectMovies={selectMovies} movies={movies} genres={genres} updateMovies={updateMovies} />
      <Route exact path="/" render={() => <MoviesList movies={movies} />} />
      <Route exact path="/movies/:movieId?" render={(props) => <Movie movieId={props.match.params.movieId} api_key={api_key} />} />
    </div>
  )
}

export default App