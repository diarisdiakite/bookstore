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
    checkCategory: (state, action) => {
      action.payload = 'Under construction';
      return action.payload;
      /*
      state.categories = 'Under construction';
      return state.categories */
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
