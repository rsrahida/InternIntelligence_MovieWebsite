import React, { useState, useEffect } from "react";
import "./WatchListPage.css";

const WatchListPage = () => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlistMovies(storedMovies);
  }, []);

  const handleRemoveFromWatchlist = (movieId) => {
    const updatedMovies = watchlistMovies.filter(
      (movie) => movie.id !== movieId
    );
    localStorage.setItem("watchlist", JSON.stringify(updatedMovies));
    setWatchlistMovies(updatedMovies);
  };

  const handleChangeStatus = (movieId, status) => {
    const updatedMovies = watchlistMovies.map((movie) =>
      movie.id === movieId ? { ...movie, status: status } : movie
    );

    localStorage.setItem("watchlist", JSON.stringify(updatedMovies));
    setWatchlistMovies(updatedMovies);
  };

  return (
    <div className="common">
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
                  <div className="status-tags">
                    <span
                      className={`status-tag ${
                        movie.status === "Watched"
                          ? "watched"
                          : movie.status === "Want to Watch"
                          ? "want-to-watch"
                          : ""
                      }`}
                    >
                      {movie.status || "Set Status"}
                    </span>
                  </div>
                  <div className="status-buttons">
                    <button
                      className="status-btn watched-btn"
                      onClick={() => handleChangeStatus(movie.id, "Watched")}
                    >
                      Watched
                    </button>
                    <button
                      className="status-btn want-to-watch-btn"
                      onClick={() =>
                        handleChangeStatus(movie.id, "Want to Watch")
                      }
                    >
                      Want to Watch
                    </button>
                  </div>
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
    </div>
  );
};

export default WatchListPage;
