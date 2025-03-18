import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      return [...state, action.payload]

      //STATE MUTATION OPTION
      //   state.push(action.payload)
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)

      //STATE MUTATION OPTION
      //   const index = state.findIndex((book) => book.id === action.payload)
      //   if (index !== -1) {
      //     state.splice(index,1)
      //   }
    },
    toggleFavorite: (state, action) => {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      )

      //STATE MUTATION OPTION
      // state.forEach((book)=>{
      //     if(book.id === action.payload) {
      //         book.isFavorite = !book.isFavorite
      //     }
      // })
    },
  },
})

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions

export const selectBooks = (state) => state.books

export default bookSlice.reducer
