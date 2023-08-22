import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from './booksSlice';

function AddNewBookFormExtended() {
  // const books = useSelector(selectAllBooks);
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    id: nanoid(),
    title: '',
    description: '',
    author: '',
    categoryId: '',
    category: '',
    year: '',
    chapters: '',
    pages: '',
  });

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const HandleAddBook = () => {
    dispatch(addBook(newBook));
    setNewBook({
      title: '',
      description: '',
      author: '',
      categoryId: '',
      category: '',
      year: '',
      chapters: '',
      pages: '',
    });
  };

  return (
    <div className="main-container">
      <p>Add a New Book </p>
      <form action="" className="add-book-form">
        <label htmlFor="categoryId">
          CategoryId
          <input
            type="number"
            name="categoryId"
            value={newBook.categoryId}
            onChange={HandleInputChange}
            id="categoryId"
          />
        </label>

        <label htmlFor="category">
          category
          <input
            type="text"
            name="category"
            value={newBook.category}
            onChange={HandleInputChange}
            placeholder="Add the new book category"
          />
        </label>

        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={HandleInputChange}
            placeholder="Add the new book title"
            id="title"
          />
        </label>

        <label htmlFor="description">
          Description
          <input
            type="text"
            name="description"
            value={newBook.description}
            onChange={HandleInputChange}
            placeholder="Add the new book Description"
          />
        </label>

        <label htmlFor="author">
          Author
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={HandleInputChange}
            placeholder="Add the book author"
            id="author"
          />
        </label>

        <label htmlFor="year">
          Year of publication
          <input
            type="number"
            name="year"
            value={newBook.year}
            onChange={HandleInputChange}
            placeholder="Add the year of pyblication"
          />
        </label>
        <label htmlFor="chapters">
          Number of Chapters
          <input
            type="number"
            name="chapters"
            value={newBook.chapters}
            onChange={HandleInputChange}
            id="chapters"
          />
        </label>
        <label htmlFor="pages">
          Number of pages
          <input
            type="number"
            name="pages"
            value={newBook.pages}
            onChange={HandleInputChange}
            id="pages"
          />
        </label>

        <button
          type="button"
          onClick={HandleAddBook}
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default AddNewBookFormExtended;
