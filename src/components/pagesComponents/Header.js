import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import classes from '../../assets/css/header.module.scss';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h1 className={classes.header__content__title}>
          Bookstore
          <span className={classes.hidden}>.</span>
          <span>CMS</span>
        </h1>
        <nav className={classes.header__content__nav}>
          <NavLink to="/books" className={classes.header__content__nav.navLink}>
            BOOKS
          </NavLink>
          <NavLink to="/categories" className={classes.NavLink}>
            CATEGORIES
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
