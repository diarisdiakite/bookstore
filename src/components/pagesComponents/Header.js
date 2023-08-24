import React from 'react';
import '../../assets/css/navBar.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAllBooksIds } from '../../redux/books/booksSlice';
import { selectAllCategories } from '../../redux/categories/categoriesSlice';

function Header() {
  const books = useSelector(selectAllBooksIds);
  const booksLength = books.length;

  const categories = useSelector(selectAllCategories);
  const categoriesLength = categories.length || 0;

  return (
    <div className="header-container">
      <div className="header">
        <h1 className="title">Bookstore CMS</h1>
        <nav>
          <ul className="nav-container">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/books" className="nav-link">
                Books
                (
                <span>{booksLength}</span>
                )
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories" className="nav-link">
                Categories (
                <span>{categoriesLength}</span>
                )
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
