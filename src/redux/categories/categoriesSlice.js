import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'category',
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
      const categoryIndex = state.categories.findIndex((category) => category.id === categoryIndex);
      if (categoryIndex !== -1) {
        state.categories[categoryIndex] = {
          id, title, author, category,
        };
      }
    },
  },
});

export const selectAllCategorys = (state) => state.categories;

export const selectCategoryById = (state, categoryId) => state.categories.find((category) => category.id === categoryId);

export const { addCategory, removeCategory, updateCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
