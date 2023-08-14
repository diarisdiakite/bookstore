import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Header from './components/pagesComponents/Header';
import HomePage from './components/pages/HomePage';
import CategoriesPages from './components/pages/CategoriesPages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
