import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  books: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      categoryId: 1,
      year: 1978,
      chapters: 24,
      pages: 389,
    },
    {
      id: '2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      categoryId: 1,
      year: 1978,
      chapters: 24,
      pages: 389,
    },
    {
      id: '3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      categoryId: 2,
      year: 1978,
      chapters: 24,
      pages: 389,
    }],
  error: '',
};

const booksSlice = createSlice({
  name: 'book',
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const idToRemove = action.payload;
      state.books = state.books.filter((book) => book.id !== idToRemove);
    },
    updateBook: (state, action) => {
      const {
        title, author, category,
      } = action.payload;
      const bookIndex = state.books.findIndex((book) => book.id === bookIndex);
      if (bookIndex !== -1) {
        state.books[bookIndex] = {
          title, author, category,
        };
      }
    },
  },
});

export const selectAllBooks = (state) => state.books.books;

export const selectBookById = (state, bookId) => state.books.books.find(
  (book) => book.id === bookId,
);

export const selectBooksByCategory = createSelector(
  // 1) find the category of the book in an array???
  [selectAllBooks, (_, categoryId) => categoryId],
  // 2) find all the books of this category
  (books, categoryId) => books.filter((book) => book.categoryId === categoryId),
);

export const { addBook, removeBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
