import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onAddTodo(title, desc);
  };
  return (
    <div className="container">
      <h3 className="text-center">Add a Todo</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            Please add your todo's title.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please add a description"
            id="desc"
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="btn-sm" variant="success" type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  );
};
