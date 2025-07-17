import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:'auth',
    initialState:false,
    reducers:{
        login:(state)=>{
            state.initialState=true;
        },
        logout:(state,action)=>{
             state.initialState=f;
        }
    }
});

export const userAction=userSlice.actions;

export default userSlice;