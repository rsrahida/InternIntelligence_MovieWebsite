import React, { useState, useEffect } from "react";
import "./TrendingPage.css";

const API_KEY = "e4abc06ace07e674d8d22443d115d4d3";
const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const GENRES_API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

const TrendingPage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    fetch(POPULAR_API_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));

    fetch(GENRES_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const limitedGenres = data.genres
          .slice(0, 7)
          .filter((genre) => genre.name !== "Documentary");
        setGenres(limitedGenres);
      })
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies =
    selectedGenre === "all"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(selectedGenre));

  return (
    <div className="trending-container">
      <h1 className="trending-title">Trending Movies</h1>

      <div className="genre-buttons">
        <button
          className={selectedGenre === "all" ? "active" : ""}
          onClick={() => handleGenreClick("all")}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={selectedGenre === genre.id ? "active" : ""}
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <div className="movies-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default TrendingPage;
