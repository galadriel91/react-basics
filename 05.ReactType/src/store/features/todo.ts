import { createSlice } from '@reduxjs/toolkit'
import { TodoItem } from '../types'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        todos: [] as TodoItem[],
        title: 'React Todo'
    },
    reducers: {
        ADD_TODO:(state , action) =>{
            state.todos.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { ADD_TODO, } = itemSlice.actions

export default itemSlice.reducer