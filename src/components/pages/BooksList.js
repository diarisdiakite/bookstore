import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAllBooks,
  removeBook, updateBook,
} from '../../redux/books/booksSlice';
import BooksListElements from '../childComponents/BooksListElements';

function BooksList() {
  const books = useSelector(selectAllBooks);
  console.log('books with selectAllBooks', books);
  const books1 = useSelector((state) => state.books.books);
  console.log('books with useSelector', books1);

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
