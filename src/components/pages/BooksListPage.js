import React from 'react';
import { Link } from 'react-router-dom';

function BooksListPage() {
  return (
    <div className="main-container">
      <h1>BooksListPage</h1>
      <Link to="/books/new">Add a new Book</Link>
      <h2>Your saved books</h2>
      <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <Link to="/books/3">Book 3</Link>
      {/* <books /> */}
    </div>
  );
}

export default BooksListPage;
