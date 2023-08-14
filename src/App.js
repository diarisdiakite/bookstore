import React from 'react';
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
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books">
          <Route index element={<BooksListPage />} />
          <Route path=":id" element={<BookPage />} />
          <Route path="new" element={<AddNewBookForm />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
