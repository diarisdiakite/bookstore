import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function BookPage({ HandleDelete }) {
  const { id } = useParams();
  return (
    <div className="main-container">
      <h2>
        {' '}
        BookPage
        { id }
      </h2>
      <div className="book-card">
        <p>The strange destiny of Wangrin</p>
        <p>Amadou H. Ba</p>
        <button
          type="button"
          onClick={HandleDelete}
        >
          Delete book
        </button>
      </div>
    </div>
  );
}

BookPage.propTypes = {
  HandleDelete: PropTypes.func.isRequired,
};

export default BookPage;
