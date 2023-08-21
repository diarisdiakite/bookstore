import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAllBooks,
} from '../../redux/books/booksSlice';
import BooksListElements from '../childComponents/BooksListElements';

function BooksList() {
  const books = useSelector(selectAllBooks);

  return (
    <div className="main-container">
      <h1>BooksListPage</h1>
      <Link to="/books/new">Add a new Book</Link>

      <BooksListElements books={books} />
    </div>
  );
}

export default BooksList;
