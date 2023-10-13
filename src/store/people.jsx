import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPeople = createAsyncThunk('people/fetchPeople',
    async () => {
        const response = await axios.get('http://localhost:3000/people');
        console.log(response)
        return response.data
    }
)


const initialState = {
    people : [],
    status : 'idle',
    error : null
}

const people = createSlice({
    name:"people",
    initialState,
    reducers : {},
    extraReducers: (builder) =>  {
        builder
        .addCase(fetchPeople.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPeople.fulfilled, (state,action) => {
            state.status = 'succeeded'
            console.log(action.payload);
            state.people = action.payload
        })
        .addCase(fetchPeople.rejected, (state,action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})


export default people.reducer