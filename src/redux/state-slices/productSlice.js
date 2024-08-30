import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"products",
    initialState:{
     categoryList:[],
     remarkProduct:[]
    },
    reducers:{
     setCategory:(state,action)=>{
         state.categoryList = action.payload
     },
     setRemarkProduct:(state,action)=>{
        state.remarkProduct = action.payload;
     }
    }
 });

 export const {setCategory,setRemarkProduct} = productSlice.actions;
export default productSlice.reducer;
 