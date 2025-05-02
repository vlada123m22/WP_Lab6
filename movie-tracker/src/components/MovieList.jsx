// src/components/MovieList.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieList = ({ movies, onDelete, onLike }) => {
  if (movies.length === 0) return <p>No movies yet.</p>;
  return (
    <div className="d-grid gap-3">
      {movies.map((movie) => (
        <Card key={movie.id} className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5>{movie.title}</h5>
            <div>
              <Button
                variant={movie.liked ? "success" : "outline-success"}
                onClick={() => onLike(movie.id)}
                className="me-2"
              >
                {movie.liked ? "Liked" : "Like"}
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => onDelete(movie.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;