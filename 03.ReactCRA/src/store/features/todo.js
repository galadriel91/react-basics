import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    todos: [],
    title: 'React Todo'
  },
  reducers: {
    ADD_TODO:(state , action) =>{
      return{
        ...state,
        todos: [...state.todos , action.payload]
      }
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ADD_TODO, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer