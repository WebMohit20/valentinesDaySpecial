import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName:"",
    valentineName:"",
    gender:"",
    userImg:null,
    valentineImg:null
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            return {...state,...action.payload};
        },
        // showUser:(state,action)=>{

        // }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer