import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authors: []
}

const authorsSlice = createSlice({
  name: 'author',
  initialState ,
  reducers:{
    //add, remove, update, diplay
    addAuthor(state, action){ //add action
      state.authors.push(action.payload)
    },
    removeAuthor(state, action) { //add action
      const idToRemove = action.payload //state.authors.findIndex((author) => author.id === come in the update
      state.authors = state.authors.filter((author) => author.id !== idToRemove)
    },
    updateAuthor(state, action){ //add action
      //declare the action payload
      const {id, name, presentation } = action.payload
      //search the id to update
      const authorId = state.authors.findIndex((author) => author.id === action.payload)
      //update if id found
      if(authorId !== -1){
        state.authors[authorId] = { id, name, presentation} //state.authors thales od the given author
      }
    }
  }

}) 
  
export const selectAllAuthors = (state) => state.authors;

export const authorById = (state, id) => state.authors.find((author) => author.id === id)

export const { addAuthor, removeAuthor, updateAuthor } = authorsSlice.actions

export default authorsSlice.reducer;
