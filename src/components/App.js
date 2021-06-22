import React, { useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import Movie from './Movie';

const MOVIE_DOMAIN =
  'https://api.themoviedb.org/3/movie/popular?api_key=7315ec59ea2264da1fa4f4eb8d647853&language=en-US&page=1';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(MOVIE_DOMAIN)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  useEffect(() => {
    setFilteredCountries(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, movies]);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottom: '1px solid #C0C4CC',
          borderWidth: '50%',
          marginLeft: '120px',
          width: '86.3%',
        }}
      >
        <img src={logo} alt="Timescale" />

        <input
          className="search-field"
          type="text"
          placeholder="Search for a movie"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="movie-container">
        {filteredCountries.length > 0 &&
          filteredCountries.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default App;
