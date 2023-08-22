import { configureStore } from '@reduxjs/toolkit';
// import logger, { createLogger } from 'redux-logger';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
