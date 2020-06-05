import React from 'react'
import Header from './components/Header/Header';
import About from './components/About/About';
import MoviesContainer from './components/MoviesList/MoviesContainer';
import { Route } from 'react-router-dom';
import CurMovie from './components/Movie/CurMovie'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <About />
      <Route exact path="/" render={() => <MoviesContainer />} />
      <Route exact path="/movies/:movieId?" render={(props) => <CurMovie {...props} />} />
    </div>
  )
}

export default App