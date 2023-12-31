import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllBooks,
  selectAllBooksIds,
  updateBook,
  fetchBooks,
  deleteBook,
} from './booksSlice';
import BooksListElements from './childComponents/BooksListElements';
import AddNewBookForm from './AddNewBookForm';
// import '../../assets/css/books.scss';
import classes from '../../assets/css/books.module.scss';

function BooksList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector(selectAllBooks);
  const bookIds = useSelector(selectAllBooksIds);

  const HandleDelete = (bookId) => dispatch(deleteBook(bookId));

  const HandleUpdate = (id, updatedBookData) => {
    dispatch(updateBook({ bookId: id, updateBookData: updatedBookData }));
  };

  if (!bookIds || bookIds.length === 0) {
    return (
      <div>
        <p className="main-container">No book found</p>
        <AddNewBookForm />
      </div>
    );
  }
  return (
    <div className={classes.books}>
      {' '}
      { books.loading && <p>...loading</p> }
      { !books.loading && books.error ? (
        <p>
          Error:
          {books.error}
        </p>
      ) : null }
      { !books.loading && Object.keys(books).length ? (
        <BooksListElements
          books={books}
          bookIds={bookIds}
          HandleDelete={HandleDelete}
          HandleUpdate={HandleUpdate}
        />
      ) : null}
      ;
      <div>
        <AddNewBookForm />
      </div>
      <hr />

    </div>
  );
}

export default BooksList;
