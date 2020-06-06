import React from 'react'
import Header from './components/Header/Header';
import MoviesContainer from './components/MoviesList/MoviesContainer';
import { Route } from 'react-router-dom';
import CurMovie from './components/Movie/CurMovie'
import AboutContainer from './components/About/AboutContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <AboutContainer />
      <Route exact path="/" render={() => <MoviesContainer />} />
      <Route exact path="/movies/:movieId?" render={(props) => <CurMovie {...props} />} />
    </div>
  )
}

export default App