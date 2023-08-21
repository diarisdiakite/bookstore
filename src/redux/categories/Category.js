import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectCategoryById } from './categoriesSlice';
import { selectBooksByCategory } from '../books/booksSlice';

function Category() {
  const { categoryId } = useParams();

  const category = useSelector((state) => selectCategoryById(state, Number(categoryId)));
  const categoryBooks = useSelector((state) => selectBooksByCategory(state, Number(categoryId)));

  const content = (
    <div>
      <h2 key={categoryId}>
        {category?.name}
        (
        {categoryBooks.length}
        )
      </h2>
      {categoryBooks.map((book) => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
          {' by '}
          {book.author}
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
