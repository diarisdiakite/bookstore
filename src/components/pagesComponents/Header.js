import React from 'react';
import '../../assets/css/navBar.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1 className="title">Bookstore CMS</h1>
      <nav>
        <ul className="nav-container">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/books" className="nav-link">Books</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/categories" className="nav-link">Categories</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
