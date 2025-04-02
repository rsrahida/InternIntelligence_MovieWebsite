import React, { useState, useEffect } from "react";
import { message, Modal } from "antd";
import "./HomePage.css";
import image from "../../assets/images/background.png";

const API_KEY = "e4abc06ace07e674d8d22443d115d4d3";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setFilteredMovies(data.results);
      })
      .catch((error) => console.log("API error:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchTerm, movies]);

  const handleAddToWatchlist = (movie) => {
    const storedMovies = JSON.parse(localStorage.getItem("watchlist")) || [];
    storedMovies.unshift(movie);
    localStorage.setItem("watchlist", JSON.stringify(storedMovies));
    message.success(`${movie.title} has been added to your watchlist!`);

    setModalMessage(
      `${movie.title} has been successfully added to your watchlist!`
    );
    setIsModalVisible(true);
  };

  return (
    <div className="homepage">
      <div className="background-container">
        <img src={image} className="background" alt="background" />
        <div className="overlay">
          <h2 className="quote">
            "Cinema is a journey beyond time. Each frame tells a story, each
            sound echoes a memory. Let the magic of movies transport you to a
            world where dreams become reality."
          </h2>
          <button className="explore-button">Explore Movies</button>
        </div>
      </div>
      <h1 className="homepage-title">Popular Movies</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="movies-list">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <img
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className="popup-poster"
              />
              <div className="popup-details">
                <h2 className="movieName">{selectedMovie.title}</h2>
                <p className="movieAbout">{selectedMovie.overview}</p>
                <button
                  className="add-to-watchlist"
                  onClick={() => handleAddToWatchlist(selectedMovie)}
                >
                  Add to Watchlist
                </button>
                <button className="exit" onClick={() => setSelectedMovie(null)}>
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal
        title="Watchlist"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        className="custom-modal"
        footer={null}
      >
        <p className="modal-message">{modalMessage}</p>
        <div className="modal-footer">
          <button
            className="modal-ok-btn"
            onClick={() => setIsModalVisible(false)}
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
