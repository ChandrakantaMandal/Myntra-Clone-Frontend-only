import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:'auth',
    initialState:false,
    reducers:{
        login:(state)=>{
            state.initialState=true;
        },
        logout:(state)=>{
             state.initialState=false;
        }
    }
});

export const {login,log}=userSlice.actions;

export default userSlice;