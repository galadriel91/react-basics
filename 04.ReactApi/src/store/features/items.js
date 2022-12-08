import { createSlice } from '@reduxjs/toolkit'
import { FETCH_LIST , FETCH_POST , FETCH_USER} from './sync'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        lists: [],
        user:{},
        posts:{}
    },
    reducers: {
        
    },
    extraReducers:(builder) => {
        builder.addCase(FETCH_LIST.fulfilled , (state , action) => {
            state.lists = action.payload
        })
        builder.addCase(FETCH_USER.fulfilled , (state , action) => {
            state.user = action.payload
        })
        builder.addCase(FETCH_POST.fulfilled , (state , action) => {
            state.posts = action.payload
        })
    }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = itemSlice.actions

export default itemSlice.reducer