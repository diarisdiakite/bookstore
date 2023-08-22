import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
import axios from 'axios';

const appId = 'otpoYVBmSxJWfZGJBIeq';
export const FEATURE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
/* export const FEATURE_URL_UD = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
 */
const initialState = {
  // loading: false,
  books: {
    loading: 'false',
    itemIds: [],
    byId: {},
    error: '',
  },
  numberOfBooks: 0,
  // error: '',
};

/* export const fetchBooks = createAsyncThunk('books/fetchBooks', () => axios
  .get(FEATURE_URL)
  .then((response) => response.data));
  .then((err) => err.message)
  // console.log(response.data));
  // .then(); */

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(FEATURE_URL);
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

/*
  create addNewBook
  handle the 3 states
*/
export const addNewBook = createAsyncThunk('books/addNewBook', async (bookData) => {
  try {
    const newBook = {
      item_id: bookData.id,
      ...bookData,
    };
    const response = await axios.post(FEATURE_URL, newBook);
    const bookObject = response.data.reduce((acc, book) => {
      acc[book.id] = book;
      return acc;
    }, {});
    console.log([...response.data]);
    console.log(bookObject);
    return bookObject;
  } catch (err) {
    return err.message;
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    const response = await axios.delete(`${FEATURE_URL}/${bookId}`);
    console.log(response.data);
    return bookId;
  } catch (err) {
    return err.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBook: (state, action) => {
      const { id } = action.payload;
      state.books.itemIds.push(id);
      state.books.byId[id].push(action.payload);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    removeBook: (state, action) => {
      const idToRemove = action.payload;
      state.books.itemIds = state.books.itemIds.filter((id) => id !== idToRemove);
      delete state.books.byId[idToRemove];
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    updateBook: (state, action) => {
      const { bookId, updateBookData } = action.payload;
      state.books.byId[bookId] = {
        ...state.books.byId[bookId],
        ...updateBookData,
      };
      localStorage.setItem('books', JSON.stringify(state.books));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = 'true';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = 'false';
      /* state.books = action.payload; */
      const booksArray = Object.values(action.payload).flat();
      const itemIds = Object.keys(action.payload).map(String); // Changed from Number
      console.log('boookArray---------------', booksArray);
      state.books = {
        itemIds,
        byId: action.payload,
      };
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = 'false';
      state.books = [];
      state.error = action.payload.message;
    });

    // addNewBook cases*
    builder.addCase(addNewBook.pending, (state) => {
      state.loading = 'true';
    });
    builder.addCase(addNewBook.fulfilled, (state, action) => {
      const { id, ...bookData } = action.payload;
      state.books.itemIds.push(id);
      state.books.byId[id] = bookData;
      console.log('id and bookData, not persited yet', id, bookData);
      localStorage.setItem('books', JSON.stringify(state.books));
      state.loading = false;
      state.error = '';
    });
    builder.addCase(addNewBook.rejected, (state, action) => {
      state.loading = 'false';
      state.books = action.payload;
      state.error = action.payload.message;
    });
    // deleteBook cases:pending, fulfilled, rejected
    builder.addCase(deleteBook.pending, (state) => {
      state.loading = 'true';
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      const idToRemove = action.payload;
      state.books.itemIds = state.books.itemIds.filter((id) => id !== idToRemove);
      delete state.books.byId[idToRemove];
      state.loading = false;
      state.error = '';
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.loading = 'false';
      state.books = action.payload;
      state.error = action.payload.message;
    });
  },
});

export const selectAllBooks = (state) => state.books.books.byId;

export const selectAllBooksIds = (state) => state.books.books.itemIds;

/*
export const selectBookById = (state, bookId) => state.books.books.find(
  (book) => book.id === bookId,
);
*/

export const selectBookByIdFromLocalStorage = (state, bookId) => {
  const storedBooks = JSON.parse(localStorage.getItem((state.books)));
  console.log('------------ Books from localStorage --------------', storedBooks);
  return storedBooks.find((book) => book.id === bookId);
};

export const selectBookByTitle = (state, bookTitle) => state.books.books.find(
  (book) => book.title === bookTitle,
);

export const selectBookById = (state, bookId) => state.books.books[bookId];

export const selectBooksByCategory = createSelector(
  // 1) find the category of the book in an array???
  [selectAllBooks, (_, categoryId) => categoryId],
  // 2) find all the books of this category
  (books, categoryId) => books.byId.filter((book) => book.categoryId === categoryId),
);

export const { addBook, removeBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
