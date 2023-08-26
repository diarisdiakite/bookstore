import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import classes from '../../../assets/css/books.module.scss';

const Completed = ({ readingDetails }) => (
  <div className={classes.books__bookCard__completed}>
    <div>
      <CircularProgressbar
        value={readingDetails.percentageCompleted}
        className={classes.books__bookCard__completed__imagePercentage}
      />
    </div>
    <div className="">
      <h3 className={classes.books__bookCard__completed__textPercentage}>
        64%
      </h3>
      <span className={classes.books__bookCard__completed__textCompleted}>Completed</span>
    </div>
  </div>
);

Completed.propTypes = {
  readingDetails: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    percentageCompleted: PropTypes.number.isRequired,
  }).isRequired,
};

export default Completed;
