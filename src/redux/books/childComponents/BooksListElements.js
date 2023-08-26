import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteBook, selectAllBooksIds } from '../booksSlice';
import classes from '../../../assets/css/books.module.scss';
import Completed from './Completed';
import Current from './Current';

function BooksListElements({ books }) {
  const dispatch = useDispatch();

  /* const handleReadingDetailsChange = (bookId, currentChapter, percentageCompleted) => {
    setReadingDetails((prevDetails) => ({
      ...prevDetails,
      [bookId]: {
        currentChapter,
        percentageCompleted,
      },
    }));
  }; */
  const booksIds = useSelector(selectAllBooksIds);
  console.log(booksIds);

  const [readingDetails, setReadingDetails] = useState({
    currentChapter: '',
    percentageCompleted: 0,
  });

  const updateReadingDetails = (bookId) => {
    if (bookId === booksIds[0]) {
      setReadingDetails({
        currentChapter: 'Chapter 17',
        percentageCompleted: 64,
      });
    } else if (bookId === booksIds[1]) {
      setReadingDetails({
        currentChapter: 'Chapter 13: "A lesson learned"',
        percentageCompleted: 8,
      });
    } else {
      setReadingDetails({
        currentChapter: 'Introduction',
        percentageCompleted: 0,
      });
    }
  };

  return (
    <div className="main-container">
      {Object.entries(books).map(([bookId, bookArray]) => {
        const bookData = bookArray[0];
        return (
          <div key={bookId} className={classes.books__bookCard}>
            <div className={classes.books__bookCard__book}>
              <div className={classes.books__bookCard__book__text}>
                <p key={`category-${bookId}`}>{bookData.category}</p>
                <h2><Link to={`/books/${bookId}`}>{bookData.title}</Link></h2>
                <p key={`author-${bookId}`} className={classes.blue}>{bookData.author}</p>
              </div>
              <div className={classes.books__bookCard__book__links}>
                <Link to="/*" className={classes.books__bookCard__book__button__comments}>Comment</Link>
                <button
                  type="button"
                  className={classes.books__bookCard__book__button__remove}
                  aria-label="Remove book"
                  onClick={() => dispatch(deleteBook(bookId))}
                >
                  | Remove |
                </button>
                <button
                  type="button"
                  className={classes.books__bookCard__book__button__edit}
                  aria-label="Update book"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className={classes.books__bookCard__book__completed}>
              <Completed
                bookId={bookId}
                readingDetails={readingDetails}
                setReadingDetails={updateReadingDetails}
              />
            </div>
            <div className={classes.books__bookCard__book__currentChapter}>
              <Current
                bookId={bookId}
                readingDetails={readingDetails}
                setReadingDetails={updateReadingDetails}
              />
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
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        category: PropTypes.string.isRequired,
      }),
    ).isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
};

export default BooksListElements;
