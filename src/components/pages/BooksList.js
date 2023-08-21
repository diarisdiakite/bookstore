import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addBook, selectAllBooks,
} from '../../redux/books/booksSlice';
import BooksListElements from '../childComponents/BooksListElements';

function BooksList() {
  const books = useSelector(selectAllBooks);
  console.log('books with selectAllBooks', books);
  const books1 = useSelector((state) => state.books.books);
  console.log('books with useSelector', books1);
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <h1>BooksListPage</h1>
      <button
        type="button"
        className="button"
        aria-label="Add a new book"
        onClick={() => dispatch(addBook())}
      >
        Add a new Book
      </button>
      <BooksListElements books={books} />
    </div>
  );
}

export default BooksList;
