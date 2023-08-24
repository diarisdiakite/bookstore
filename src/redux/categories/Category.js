import React from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectCategoryById } from './categoriesSlice';
import { selectAllBooks } from '../books/booksSlice';

function Category() {
  const { categoryId } = useParams();
  const category = useSelector((state) => selectCategoryById(state, categoryId));

  const selectBooksByCategory = createSelector(
    [selectAllBooks, (_, categoryId) => categoryId],
    (books, categoryId) => Object.values(books).filter((book) => book.category === categoryId),
  );

  const booksByCategory = useSelector(selectBooksByCategory);

  const content = (
    <div>
      <h2 key={categoryId}>{category?.name}</h2>
      {booksByCategory.map((book) => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
          {' by '}
          {book?.author}
        </li>
      ))}
    </div>
  );

  return (
    <div className="main-container" key={`category-${categoryId}`}>
      {content}
    </div>
  );
}

export default Category;
