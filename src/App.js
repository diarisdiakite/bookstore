import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Header from './components/pagesComponents/Header';
import HomePage from './components/pages/HomePage';
import BookPage from './components/pages/BookPage';
import BooksListPage from './components/pages/BooksListPage';
import AddNewBookForm from './components/pages/AddNewBookForm';
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
        <Route path="/" element={<HomePage />} />
        <Route path="/books">
          <Route index element={<BooksListPage HandleDelete={HandleDelete} />} />
          <Route path=":id" element={<BookPage HandleDelete={HandleDelete} />} />
          <Route path="new" element={<AddNewBookForm />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
