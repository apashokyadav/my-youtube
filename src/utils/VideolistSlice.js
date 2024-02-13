import { createSlice } from "@reduxjs/toolkit";

const videolistSlice=createSlice({
    name:"videolist",
    initialState:{
        list:[],
    },
    reducers:{
        updatelist:(state,action)=>{
            state.list=action.payload;
        },
    },
})
export const {updatelist} =videolistSlice.actions;
export default videolistSlice.reducer;