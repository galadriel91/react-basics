import { createSlice } from '@reduxjs/toolkit'
import { FETCH_LIST , FETCH_POST , FETCH_USER} from './sync'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        isLoading:false,
        lists: [],
        user:{},
        posts:{}
    },
    reducers: {
        
    },
    extraReducers:(builder) => {
        builder.addCase(FETCH_LIST.pending , (state , action) => {
            state.isLoading = true
        })
        builder.addCase(FETCH_LIST.fulfilled , (state , action) => {
            state.isLoading = false
            state.lists = action.payload
        })
        builder.addCase(FETCH_USER.pending , (state , action) => {
            state.isLoading = true
        })
        builder.addCase(FETCH_USER.fulfilled , (state , action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(FETCH_POST.pending , (state , action) => {
            state.isLoading = true
        })
        builder.addCase(FETCH_POST.fulfilled , (state , action) => {
            state.isLoading = false
            state.posts = action.payload
        })
    }
})

export default itemSlice.reducer