import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './assets/css/books.css';
import Header from './components/pagesComponents/Header';
import Home from './components/pages/Home';
import Book from './redux/books/Book';
import BooksList from './redux/books/BooksList';
import AddNewBookForm from './redux/books/AddNewBookForm';
import CategoriesList from './redux/categories/CategoriesList';
import Category from './redux/categories/Category';
import NotFoundPage from './components/pages/NotFoundPage';

// import { removeBook, updateBook } from './redux/books/booksSlice';

function App() {
  const books = useState(JSON.parse(localStorage.getItem('books')) || []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<BooksList />} />
          <Route path=":bookId" element={<Book />} />
          <Route path="new" element={<AddNewBookForm />} />
        </Route>
        <Route path="/categories">
          <Route index element={<CategoriesList />} />
          <Route path=":categoryId" element={<Category />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
