import React, { useEffect } from 'react';
// import { nanoid } from '@reduxjs/toolkit';
// import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectAllBooks,
  selectAllBooksIds,
  updateBook,
  fetchBooks,
  deleteBook, /* addNewBook, */
} from './booksSlice';
import BooksListElements from './childComponents/BooksListElements';
import AddNewBookForm from './AddNewBookForm';

function BooksList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector(selectAllBooks);
  console.log('books with selectAllBooks', books);
  /*  console.log('booksLength', books.length); */
  const bookIds = useSelector(selectAllBooksIds);
  console.log('booksIds with selectAllBooksIds', bookIds);

  const HandleDelete = (bookId) => dispatch(deleteBook(bookId));

  const HandleUpdate = (id, updatedBookData) => {
    dispatch(updateBook({ bookId: id, updateBookData: updatedBookData }));
  };

  return (
    <div className="main-container">
      <h2>
        Books (
        {Object.keys(books).length}
        )
      </h2>
      <Link to="/books/new">Add a new Book</Link>
      {/* { books.loading && <p>...loading</p> }
      { !books.loading && books.error ? (
        <p>
          Error:
          {books.error}
        </p>
      ) : null }
      { !books.loading && books.length ? (
        <BooksListElements
          books={books}
          bookIds={bookIds}
          HandleDelete={HandleDelete}
          HandleUpdate={HandleUpdate}
        />
      ) : null} */}
      ;
      <BooksListElements
        books={books}
        bookIds={bookIds}
        HandleDelete={HandleDelete}
        HandleUpdate={HandleUpdate}
      />
      <div>
        {/* <Link to="/books/new">Add a new Book</Link> */}
        <AddNewBookForm />
      </div>
      <hr />

    </div>
  );
}

export default BooksList;
