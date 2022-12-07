import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'
const { composeWithDevTools } = require('redux-devtools-extension')
const enhancer = composeWithDevTools()

export default configureStore({
  reducer: {
    counter: counterReducer,
    enhancer
  },
})