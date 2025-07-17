import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:'auth',
    initialState:false,
    reducers:{
        
    }
});

export const userAction=userSlice.actions;

export default userSlice;