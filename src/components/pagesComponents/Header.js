import React from 'react';
import { useSelector } from 'react-redux';
import { BsPersonCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { selectAllBooksIds } from '../../redux/books/booksSlice';
import { selectAllCategories } from '../../redux/categories/categoriesSlice';
import classes from '../../assets/css/header.module.scss';

function Header() {
  const books = useSelector(selectAllBooksIds);
  const booksLength = books.length;

  const categories = useSelector(selectAllCategories);
  const categoriesLength = categories.length || 0;

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h1 className={classes.header__content__title}>
          Bookstore
          <span className={classes.hidden}>.</span>
          <span>CMS</span>
        </h1>
        <nav className={classes.header__content__nav}>
          <NavLink to="/" className={classes.header__content__nav.navLink}>Home</NavLink>
          <NavLink to="/books" className={classes.header__content__nav.navLink}>
            Books
            (
            <span>{booksLength}</span>
            )
          </NavLink>
          <NavLink to="/categories" className={classes.NavLink}>
            Categories (
            <span>{categoriesLength}</span>
            )
          </NavLink>
        </nav>
        <div className={classes.header__content__user}>
          <BsPersonCircle />
        </div>
      </div>
    </header>
  );
}

export default Header;
