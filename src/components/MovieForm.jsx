// src/components/MovieForm.jsx
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const MovieForm = ({ onAdd, setFilter }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ id: Date.now(), title, liked: false });
    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col md={5}>
          <Form.Control
            type="text"
            placeholder="Add movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Button type="submit">Add</Button>
        </Col>
        <Col md={5}>
          <Form.Control
            type="text"
            placeholder="Filter movies"
            onChange={(e) => setFilter(e.target.value)}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default MovieForm;