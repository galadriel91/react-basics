import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    todos: [],
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
export const { ADD_TODO, CHECK_TODO, DELETE_TODO, UPDATE_TODO } = counterSlice.actions

export default counterSlice.reducer