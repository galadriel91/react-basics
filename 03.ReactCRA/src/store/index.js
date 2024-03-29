import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo'

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
})