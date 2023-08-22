import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllCategories } from './categoriesSlice';

function CategoriesList() {
  const categories = useSelector(selectAllCategories);
  console.log(categories);

  const content = categories.map((category) => (
    <div key={category.id}>
      <h2 key={category.id}>
        <Link to={`/categories/${category.id}`}>
          {category.name}
          {' '}
          (
          {category.totalBooksInCategory}
          )
        </Link>
      </h2>
      <p key={`description-${category.id}`}>
        {category.description}
        {' '}
      </p>
    </div>
  ));

  return (
    <div className="main-container">
      {content}
    </div>
  );
}

export default CategoriesList;
