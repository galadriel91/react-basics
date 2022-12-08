import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchListItem , fetchUserItem , fetchPostItem } from '../../api'

export const FETCH_LIST = createAsyncThunk(
    'item/fetchListByPath',
    async(path , thunkAPI)=>{
        const response = await fetchListItem(path)
        return response.data
    }
)

export const FETCH_USER = createAsyncThunk(
    'item/fetchUserByid',
    async(path , thunkAPI)=>{
        const response = await fetchUserItem(path)
        return response.data
    }
)

export const FETCH_POST = createAsyncThunk(
    'item/fetchPostByid',
    async(path , thunkAPI)=>{
        const response = await fetchPostItem(path)
        return response.data
    }
)

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