import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { removeBook, updateBook, selectBookById } from '../../redux/books/booksSlice';

function Book() {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const book = useSelector((state) => selectBookById(state, bookId));
  console.log(book);
  return (
    <div className="main-container">
      <div className="book-card">
        <div className="book" key={`book-${bookId}`}>
          <h2>{book?.title}</h2>
          <p>{book?.author}</p>
          <p>{book?.category}</p>
          <div>
            <p>
              {' year: '}
              {book?.year}
              ,
              {' Chapters: '}
              {book?.chapters}
              ,
              {' Pages: '}
              {book?.pages}
            </p>
          </div>
          <button
            type="button"
            aria-label="Update book"
            onClick={() => dispatch(updateBook())}
          >
            Update the book
          </button>
          <button
            type="button"
            aria-label="Remove book"
            onClick={() => dispatch(removeBook())}
          >
            Remove the book
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
