import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import classes from '../../../assets/css/books.module.scss';

const Current = ({ readingDetails }) => (
  <div>
    <h3 className={classes.books__bookCard__currentChapter__textCurrent}>
      CURRENT CHAPTER
    </h3>
    <h3 className={classes.books__bookCard__currentChapter__textCurrent}>
      {readingDetails.currentChapter}
    </h3>
    <button
      type="button"
      className={classes.books__bookCard__currentChapter__buttonCurrent}
    >
      UPDATE PROGRESS
    </button>
  </div>
);

Current.propTypes = {
  readingDetails: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    percentageCompleted: PropTypes.number.isRequired,
  }).isRequired,
};

export default Current;
