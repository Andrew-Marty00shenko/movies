import React from 'react'
import Header from './components/Header/Header';
import About from './components/About/About';
import MoviesContainer from './components/MoviesList/MoviesContainer';
import { Route } from 'react-router-dom';
import Movie from './components/Movie/Movie'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <About />
      <Route exact path="/" render={() => <MoviesContainer />} />
      <Route path="/:movieId?" render={() => <Movie />} />
    </div>
  )
}

export default App