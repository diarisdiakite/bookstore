import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  categories: [],
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

export const selectCategoryById = (state, categoryId) => state.categories.find(
  (category) => category.id === categoryId,
);

export const { addCategory, removeCategory, updateCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
