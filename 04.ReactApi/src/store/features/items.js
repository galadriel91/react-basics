import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        lists: [],
    },
    reducers: {
        
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default itemSlice.reducer