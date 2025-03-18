import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/BooksSlice'
import filterReducer from './slices/FilterSlice'
import errorReducer from './slices/ErrorSlice'

export default configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer,
  },
})
