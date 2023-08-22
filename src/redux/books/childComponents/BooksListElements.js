import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteBook, updateBook } from '../booksSlice';

function BooksListElements({ books }) {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <h2>Am I printed?</h2>
      {Object.entries(books).map(([bookId, bookArray]) => {
        const bookData = bookArray[0];
        console.log('bookData', bookData);
        return (
          <div key={bookId}>
            <div className="book-card">
              <div className="book">
                <h2><Link to={`/books/${bookId}`}>{bookData.title}</Link></h2>
                <p key={`author-${bookId}`}>{bookData.author}</p>
                <p key={`category-${bookId}`}>{bookData.category}</p>
                <div>
                  <p key={`year-${bookId}`}>
                    {' year: '}
                    {bookData.year}
                    ,
                    {' Chapters: '}
                    {bookData.chapters}
                    ,
                    {' Pages: '}
                    {bookData.pages}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Update book"
                  onClick={() => dispatch(updateBook(bookId))}
                >
                  Update the book
                </button>
                <button
                  type="button"
                  aria-label="Remove book"
                  onClick={() => dispatch(deleteBook(bookId))}
                >
                  Remove the book
                </button>
              </div>
              <div className="progress">Am I printed?</div>
              <div className="current-chapter">Am I printed?</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

BooksListElements.propTypes = {
  // loading: PropTypes.string,
  books: PropTypes.shape({
    loading: PropTypes.string.isRequired,
    itemIds: PropTypes.arrayOf({ id: PropTypes.string }).isRequired,
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

/* BooksListElements.defaultProps = {
  books: {
    loading: '',
  },
};
 */
export default BooksListElements;
