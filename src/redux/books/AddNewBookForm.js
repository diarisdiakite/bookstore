import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addNewBook } from './booksSlice';
// import { useNavigate } from 'react-router-dom';

function AddNewBookForm() {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    item_id: nanoid(),
    title: '',
    category: '',
    author: '',
  });

  const HandleSubmit = () => {
    dispatch(addNewBook(newBook));
    setNewBook({
      id: nanoid(),
      title: '',
      category: '',
      author: '',
    });
  };

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  return (
    <div className="">
      <h2>Add a New Book </h2>
      <form action="" className="add-book-form" onSubmit={HandleSubmit}>

        <input
          type="hidden"
          value={newBook.item_id}
          name="item_id"
        />

        <input
          className="form-title"
          type="text"
          name="title"
          value={newBook.title}
          onChange={HandleInputChange}
          placeholder="Add the new book title"
          id="title"
        />

        <input
          className="form-category"
          type="text"
          name="category"
          value={newBook.category}
          onChange={HandleInputChange}
          placeholder="Add the new book category"
        />

        <button
          type="button"
          className="form-button"
          onClick={HandleSubmit}
        >
          Submit
        </button>

      </form>
    </div>
  );
}

/* AddNewBookForm.propTypes = {
  newBook: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }),
  setNewBook: PropTypes.func,
};

AddNewBookForm.defaultProps = {
  newBook: {},
  setNewBook: () => {},
}; */

export default AddNewBookForm;
