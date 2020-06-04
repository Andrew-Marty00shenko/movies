import React from 'react'
import Axios from 'axios';
import Header from './components/Header/Header';

// const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const App = () => {
  // useEffect(() => {
  //   Axios.get(`https://api.themoviedb.org/3/movie/523/images?api_key=${api_key}`)
  //     .then(res => console.log(res.data));
  // }, [])
  return (
    <div className="app-wrapper">
      <Header />
    </div>
  )
}

export default App