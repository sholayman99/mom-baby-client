import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    categoryList: [],
    subCategoryList: [],
    remarkProduct: [],
    productList: [],
    total:[]
  },
  reducers: {
    setCategory: (state, action) => {
      state.categoryList = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subCategoryList = action.payload;
    },
    setRemarkProduct: (state, action) => {
      state.remarkProduct = action.payload;
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setProductByKeyword: (state, action) => {
      state.productList = action.payload;
    },
    setProductByFilter:(state,action)=>{
      state.productList = action.payload;
    },
    setProductByCategory:(state,action)=>{
      state.productList = action.payload;
    },
    setTotal:(state,action)=>{
      state.total = action.payload;
  },

  },
});

export const {
  setCategory,
  setSubCategory,
  setRemarkProduct,
  setProductList,
  setProductByKeyword,
  setProductByFilter,
  setTotal,
  setProductByCategory
} = productSlice.actions;
export default productSlice.reducer;
