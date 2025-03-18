import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/BooksSlice'
import filterReducer from './slices/FilterSlice'

export default configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
})
