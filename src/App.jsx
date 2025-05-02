// src/App.jsx
import React, { useEffect, useState } from "react";
import MovieForm from "./components/MovieForm.jsx";
import MovieList from "./components/MovieList.jsx";
import { Container, Button } from "react-bootstrap";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const saved = localStorage.getItem("movies");
    if (saved) setMovies(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => setMovies([...movies, movie]);
  const deleteMovie = (id) => setMovies(movies.filter((m) => m.id !== id));
  const toggleLike = (id) =>
    setMovies(
      movies.map((m) =>
        m.id === id ? { ...m, liked: !m.liked } : m
      )
    );

  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Movie Tracker</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </Button>
      </div>

      <MovieForm onAdd={addMovie} setFilter={setFilter} />
      <MovieList
        movies={filteredMovies}
        onDelete={deleteMovie}
        onLike={toggleLike}
      />
    </Container>
  );
};

export default App;
