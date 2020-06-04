import React, { useEffect } from 'react'
import Axios from 'axios';

const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const App = () => {
  useEffect(() => {
    Axios.get(`https://api.themoviedb.org/3/movie/523?api_key=${api_key}`)
      .then(res => console.log(res.data));
  }, [])
  return (
    <div className="wrapper"></div>
  )
}

export default App