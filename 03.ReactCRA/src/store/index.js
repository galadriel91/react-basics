import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo'
const { composeWithDevTools } = require('redux-devtools-extension')
const enhancer = composeWithDevTools()

export default configureStore({
  reducer: {
    todo: todoReducer,
    enhancer
  },
})