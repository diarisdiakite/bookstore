import React
  from 'react';
import { Link } from 'react-router-dom';

function BooksListPage() {
  return (
    <div className="main-container">
      <h1>BooksListPage</h1>
      <Link to="/books/1">Book 1</Link>
    </div>
  );
}

export default BooksListPage;
