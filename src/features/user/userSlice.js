// const createSlice = require('@reduxjs/toolkit').createSlice;
// const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk; 
// const axios = require('axios');

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loading: false,
    users: [],
    error: ''
}


// generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUser', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data)
});

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending , state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled , (state,action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected , (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer;

// module.exports = userSlice.reducer;
// module.exports.fetchUsers = fetchUsers;