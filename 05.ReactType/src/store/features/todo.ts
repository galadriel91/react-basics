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
        CHECK_TODO:(state , action)=>{
            const index = state.todos.findIndex(v=>v.id === action.payload.id)
            state.todos[index].isCheck = action.payload.isCheck
        },
        DELETE_TODO:(state ,action)=>{
            const index = state.todos.findIndex(v=>v.id === action.payload.id)
            state.todos.splice(index ,1)
        },
        UPDATE_TODO: (state ,action) => {
            const index = state.todos.findIndex(v=>v.id === action.payload.id)
            state.todos[index].content = action.payload.content
        },
    },
})

// Action creators are generated for each case reducer function
export const { ADD_TODO, CHECK_TODO , DELETE_TODO , UPDATE_TODO} = itemSlice.actions

export default itemSlice.reducer