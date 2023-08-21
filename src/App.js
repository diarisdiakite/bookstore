import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Header from './components/pagesComponents/Header';
import Home from './components/pages/Home';
import Book from './components/pages/Book';
import BooksList from './components/pages/BooksList';
import AddNewBookForm from './components/pages/AddNewBookForm';
import CategoriesList from './components/pages/CategoriesList';
import Category from './components/pages/Category';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  const books = useState(JSON.parse(localStorage.getItem('books')) || []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const HandleDelete = (id) => {
    const listBooks = books.filter((book) => book.id !== id);
    localStorage.setItem(listBooks, JSON.stringify(books));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<BooksList HandleDelete={HandleDelete} />} />
          <Route path=":bookId" element={<Book HandleDelete={HandleDelete} />} />
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
