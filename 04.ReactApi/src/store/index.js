import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './features/items'

export default configureStore({
    reducer: {
        item:itemSlice
    },
})