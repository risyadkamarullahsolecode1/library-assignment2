import React, { useState, useRef } from 'react';
import Header from './components/Header.Jsx';
import Footer from './components/Footer.Jsx';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import './App.css'

let nextId = 0;

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, { ...book,id: nextId++ }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (book) => {
    setEditingBook(book);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null);
  };

  return (
    <div className="container-fluid">
      <Header />

      <h1 className="text-center mt-5 pt-5">Library Management System</h1>
      <AddBookForm
        handleSubmit={editingBook ? updateBook : addBook}
        editingBook={editingBook}
        setEditingBook={setEditingBook}
      />
      
      <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
      <Footer/>
    </div>
  );
}

export default App;
