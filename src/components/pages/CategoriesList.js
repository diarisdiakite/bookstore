import React from 'react';
import { useSelector } from 'react-redux';
import { getCategoryStatus } from '../../redux/categories/categoriesSlice';

function CategoriesList() {
  const categoryStatus = useSelector(getCategoryStatus);
  return (
    <div className="main-container">
      CategoriesPage
      <p>{categoryStatus}</p>
    </div>
  );
}

export default CategoriesList;
