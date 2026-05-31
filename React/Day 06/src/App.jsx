import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import MovieCard from './components/MovieCard'

export default function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);


  async function getMovies() {
    try {
      //Top movies API
      let API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

      //Search API

      if (search != "") {
        API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
      }

      const response = await fetch(API);
      const data = await response.json();
      setMovies(data.results)

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(
    () => {
      getMovies();
      //Component is mount and after search state change component is update(re-render)
    },
    [search]
  )

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div class="container">
        <div class="movie-wrapper">
          {
            movies.map((data, index) => {
              return <MovieCard key={index} title={data.title} thumbnail={"https://image.tmdb.org/t/p/w1280" + data.poster_path} rating={data.vote_average} />
            })
          }
          <MovieCard />
        </div>
      </div>
    </>


  )
}
