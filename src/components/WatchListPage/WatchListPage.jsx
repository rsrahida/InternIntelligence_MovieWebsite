import React, { useState, useEffect } from "react";
import "./WatchListPage.css";

const WatchListPage = () => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  useEffect(() => {
    // LocalStorage'dan filmleri alıyoruz
    const storedMovies = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlistMovies(storedMovies);
  }, []);

  const handleRemoveFromWatchlist = (movieId) => {
    // Filmi kaldırmak için, öncelikle mevcut watchlist'i alıyoruz
    const updatedMovies = watchlistMovies.filter(
      (movie) => movie.id !== movieId
    );

    // Güncellenmiş listeyi localStorage'a kaydediyoruz
    localStorage.setItem("watchlist", JSON.stringify(updatedMovies));

    // State'i güncelliyoruz
    setWatchlistMovies(updatedMovies);
  };

  return (
    <div className="watchlist-wrapper">
      <h1 className="watchlist-heading">Your Watchlist</h1>
      <div className="movie-list">
        {watchlistMovies.length > 0 ? (
          watchlistMovies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromWatchlist(movie.id)}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-movies-message">No movies in your watchlist.</p>
        )}
      </div>
    </div>
  );
};

export default WatchListPage;
