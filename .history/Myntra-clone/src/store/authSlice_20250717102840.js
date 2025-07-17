import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:'auth',
    initialState:false,
    reducers:{
        login:(state,action)=>{
            state.
        },
        logout:(state,action)=>{
            return action.payload;
        }
    }
});

export const userAction=userSlice.actions;

export default userSlice;