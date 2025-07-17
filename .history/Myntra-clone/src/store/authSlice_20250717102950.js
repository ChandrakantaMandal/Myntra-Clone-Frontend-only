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

export const {login}=userSlice.actions;

export default userSlice;