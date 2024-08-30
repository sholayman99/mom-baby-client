import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"products",
    initialState:{
     categoryList:[]
    },
    reducers:{
     setCategory:(state,action)=>{
         state.categoryList = action.payload
     }
    }
 });

 export const {setCategory} = productSlice.actions;
export default productSlice.reducer;
 