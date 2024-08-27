import {createSlice} from "@reduxjs/toolkit";


export const settingsSlice = createSlice({
   name:"settings",
   initialState:{
    loader:"hide"
   },
   reducers:{
    showLoader:(state)=>{
        state.loader = "show"
    },
    hideLoader:(state)=>{
        state.loader = "hide"
    }
   }
});

export const {showLoader,hideLoader} = settingsSlice.actions;
export default settingsSlice.reducer;