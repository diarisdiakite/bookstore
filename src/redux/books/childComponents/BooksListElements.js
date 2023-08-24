import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteBook } from '../booksSlice';

function BooksListElements({ books }) {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      {Object.entries(books).map(([bookId, bookArray]) => {
        const bookData = bookArray[0];
        console.log('bookData', bookData);
        return (
          <div key={bookId}>
            <div className="book-card">
              <div className="book">
                <div className="text">
                  <p key={`category-${bookId}`}>{bookData.category}</p>
                  <h2><Link to={`/books/${bookId}`}>{bookData.title}</Link></h2>
                  <p key={`author-${bookId}`}>{bookData.author}</p>
                </div>
                <div className="buttons">
                  <Link to="/*" className="button-white">Comment</Link>
                  <button
                    type="button"
                    className="button-white"
                    aria-label="Update book"
                    // onClick={}
                  >
                    | Update the book |
                  </button>
                  <button
                    type="button"
                    className="button-white"
                    aria-label="Remove book"
                    onClick={() => dispatch(deleteBook(bookId))}
                  >
                    Remove the book
                  </button>
                </div>
              </div>
              <div className="progress" />
              <div className="current-chapter" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

BooksListElements.propTypes = {
  books: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    itemIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    byId: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        category: PropTypes.string.isRequired,
      }),
    ).isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
};

export default BooksListElements;
