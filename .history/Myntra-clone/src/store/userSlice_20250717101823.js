import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        loggedin:(state,action)=>{
            return action.payload
        }
    }
});

export const userAction=

export default userSlice;