import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeBook, updateBook } from '../../redux/books/booksSlice';

function BooksListElements({ books }) {
  const dispatch = useDispatch();
  return (
    <div className="main-container">
      {books.map((book) => (
        <div key={book.id}>
          <div className="book-card">
            <div className="book">
              <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
              <p key={`author-${book.id}`}>{book.author}</p>
              <p key={`category-${book.id}`}>{book.category}</p>
              <div>
                <p key={`year-${book.id}`}>
                  {' year: '}
                  {book.year}
                  ,
                  {' Chapters: '}
                  {book.chapters}
                  ,
                  {' Pages: '}
                  {book.pages}
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
      ))}
    </div>
  );
}

BooksListElements.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      year: PropTypes.number,
      chapters: PropTypes.number,
      pages: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default BooksListElements;
