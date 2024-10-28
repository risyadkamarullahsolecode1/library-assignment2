import React from 'react';
import { Table, Button, Card } from 'react-bootstrap';

function BookList({ books, onEdit, onDelete }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Book List</Card.Title>
        {books.length > 0 ? (
          <Table striped="columns" bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Year</th>
                <th>ISBN</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.year}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => onEdit(book)} className="me-2 text-center">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => onDelete(book.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="text-center">No books available. Please add some books.</p>
        )}
      </Card.Body>
    </Card>
  );
}

export default BookList;
