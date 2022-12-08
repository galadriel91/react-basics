import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchListItem } from '../../api'

export const FETCH_LIST = createAsyncThunk(
    'item/fetchListByPath',
    async(path , thunkAPI)=>{
        const response = await fetchListItem(path)
        return response.data
    }
)

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        lists: [],
    },
    reducers: {
        
    },
    extraReducers:(builder) => {
        builder.addCase(FETCH_LIST.fulfilled , (state , action) => {
            state.lists = action.payload
        })
    }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = itemSlice.actions

export default itemSlice.reducer