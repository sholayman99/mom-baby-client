import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    categoryList: [],
    subCategoryList: [],
    remarkProduct: [],
    productList: [],
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
  },
});

export const {
  setCategory,
  setSubCategory,
  setRemarkProduct,
  setProductList,
  setProductByKeyword,
} = productSlice.actions;
export default productSlice.reducer;
