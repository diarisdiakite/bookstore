import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAllBooks,
  removeBook, updateBook,
} from './booksSlice';
import BooksListElements from '../../components/childComponents/BooksListElements';

function BooksList() {
  const books = useSelector(selectAllBooks);

  const HandleDelete = (id) => {
    removeBook(id);
  };

  const HandleUpdate = (id) => {
    updateBook(id);
  };

  return (
    <div className="main-container">
      <p><Link to="/books/new">Add a new Book</Link></p>
      <hr />
      <BooksListElements
        books={books}
        HandleDelete={HandleDelete}
        HandleUpdate={HandleUpdate}
      />
    </div>
  );
}

export default BooksList;
