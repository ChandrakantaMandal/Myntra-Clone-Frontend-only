import {createSlice} from "@reduxjs/toolkit"


const initialState = false;

const userSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state)=>{
            state.initialState=true;
        },
        logout:(state)=>{
             state.initialState=false;
        }
    }
});

export const {login,logout}=userSlice.actions;

export default userSlice;