import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    /* prepare(title, author, category) {
      return {
        payload: {
          id: nanoid,
          title,
          author,
          category,
        },
      };
    }, */
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const idToRemove = action.payload;
      state.books = state.books.filter((book) => book.id !== idToRemove);
    },
    updateBook: (state, action) => {
      const {
        id, title, author, category,
      } = action.payload;
      const bookIndex = state.books.findIndex((book) => book.id === bookIndex);
      if (bookIndex !== -1) {
        state.books[bookIndex] = {
          id, title, author, category,
        };
      }
    },
  },
});

export const selectAllBooks = (state) => state.books;

export const selectBookById = (state, bookId) => state.books.find((book) => book.id === bookId);

export const { addBook, removeBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
