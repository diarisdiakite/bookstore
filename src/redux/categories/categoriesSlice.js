import { createSlice } from '@reduxjs/toolkit';
import { addBook as bookAdded, removeBook as bookRemoved } from '../books/booksSlice';

const initialState = {
  loading: false,
  categories: [
    {
      id: '1',
      name: 'Fiction',
      description: 'Category\'s description',
      totalBooksInCategory: 0,
    },
    {
      id: '2',
      name: 'Nonfiction',
      description: 'Category\'s description',
      totalBooksInCategory: 0,
    },
    {
      id: '3',
      name: 'Romantic',
      description: 'Category\'s description',
      totalBooksInCategory: 0,
    },
  ],
  status: 'Under construction',
  error: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      const idToRemove = action.payload;
      state.categories = state.categories.filter((category) => category.id !== idToRemove);
    },
    updateCategory: (state, action) => {
      const {
        id, title, author, category,
      } = action.payload;
      const categoryIndex = state.categories.findIndex(
        (category) => category.id === categoryIndex,
      );
      if (categoryIndex !== -1) {
        state.categories[categoryIndex] = {
          id, title, author, category,
        };
      }
    },
    checkCategory: (state) => {
      state.status = 'Under construction';
      return state.status;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(bookAdded, (state) => {
      state.totalBooksInCategory += 1;
    });
    builders.addCase(bookRemoved, (state) => {
      state.totalBooksInCategory -= 1;
    });
  },

});

export const selectAllCategories = (state) => state.categories.categories;

export const getCategoryStatus = (state) => state.categories.status;

export const getTotalBooksInCategory = (state) => state.categories.categories.totalBooksInCategory;

export const selectCategoryById = (state, categoryId) => state.categories.categories.find(
  (category) => category.id === categoryId,
);

/* export const getTotalBooksInCategoryById = (state, categoryId) =>
state.categories.categories[`${categoryId}`].totalBooksInCategory;
 */

export const {
  addCategory, removeCategory, updateCategory, checkCategory,
  updateBooksBookAdded, updateBooksBookRemoved, countBooks,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
