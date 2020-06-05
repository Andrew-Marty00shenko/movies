import React from 'react'
import Header from './components/Header/Header';
import About from './components/About/About';
import MoviesContainer from './components/MoviesList/MoviesContainer';

// 
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <About />
      <MoviesContainer />
    </div>
  )
}

export default App