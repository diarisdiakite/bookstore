import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { addNewBook } from './booksSlice';
import classes from '../../assets/css/books.module.scss';

function AddNewBookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate('/books');
  };

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  return (
    <div className={classes.addBookForm}>
      <h2 className={classes.addBookForm__formTitle}>Add New Book </h2>
      <form action="" className="">

        <input
          type="hidden"
          value={newBook.item_id}
          name="item_id"
        />

        <input
          className={classes.addBookForm__bookTitle}
          type="text"
          name="title"
          value={newBook.title}
          onChange={HandleInputChange}
          placeholder="Add the new book title"
          id="title"
        />

        <input
          className={classes.addBookForm__bookCategory}
          type="text"
          name="category"
          value={newBook.category}
          onChange={HandleInputChange}
          placeholder="Add the new book category"
        />

        <input
          className={classes.addBookForm__bookCategory}
          type="text"
          name="author"
          value={newBook.author}
          onChange={HandleInputChange}
          placeholder="Add the new book author"
        />

        <button
          type="button"
          className={classes.addBookForm__addButton}
          onClick={HandleSubmit}
        >
          ADD BOOK
        </button>

      </form>
    </div>
  );
}

export default AddNewBookForm;
