import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function AddBookForm({ handleSubmit, editingBook, setEditingBook }) {
  const [book, setBook] = useState({ title: '', author: '', category: '', year: '', isbn: '' });
  const titleRef = useRef(null);

  useEffect(() => {
    if (editingBook) {
      setBook(editingBook);
      titleRef.current.focus();
    } else {
      clearForm();
    }
  }, [editingBook]);

  const clearForm = () => {
    setBook({ title: '', author: '', category: '', year: '', isbn: '' });
    setEditingBook(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.category && book.year && book.isbn) {
      handleSubmit(book);
      clearForm();
    }
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title className="text-center">{editingBook ? 'Edit Book' : 'Add New Book'}</Card.Title>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              ref={titleRef}
              placeholder="Enter book title"
              required
              max = "200"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              placeholder="Enter author's name"
              required
              max = "200"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={book.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Science">Science</option>
              <option value="Biography">Biography</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Publication Year</Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={book.year}
              onChange={handleChange}
              placeholder="Enter publication year"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              name="isbn"
              value={book.isbn}
              onChange={handleChange}
              placeholder="Enter ISBN number"
              required
              max = "20"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="me-2">
            {editingBook ? 'Update Book' : 'Add Book'}
          </Button>
          <Button variant="secondary" onClick={clearForm} type="button">
            Clear
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AddBookForm;
