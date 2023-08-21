import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  categories: [
    {
      id: 1,
      name: 'Fiction',
      description: 'Category\'s description',
      totalBooksInCategory: 2,
    },
    {
      id: 2,
      name: 'Nonfiction',
      description: 'Category\'s description',
      totalBooksInCategory: 1,
    },
    {
      id: 3,
      name: 'Romantic',
      description: 'Category\'s description',
      totalBooksInCategory: 0,
    },
  ],
  status: 'Under construction', // Check if the '' needs to be in the array or just returned
  error: '',
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkCategory: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;
    },
  },

});

export const selectAllCategories = (state) => state.categories.categories;

export const getCategoryStatus = (state) => state.categories.status;

export const getTotalBooksInCategory = (state) => state.categories.totalBooksInCategory;

export const selectCategoryById = (state, categoryId) => state.categories.categories.find(
  (category) => category.id === categoryId,
);

export const { addCategory, removeCategory, updateCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
