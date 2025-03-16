import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/reducer'
import filterReducer from './slices/FilterSlice'

export default configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
})
