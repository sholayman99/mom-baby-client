import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    categoryList: [],
    subCategoryList: [],
    remarkProduct: [],
    productList: [],
    total: [],
    details: [],
    reviews:[],
    avgRate:[]
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
    setProductByFilter: (state, action) => {
      state.productList = action.payload;
    },
    setProductByCategory: (state, action) => {
      state.productList = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setDeatils: (state, action) => {
      state.details = action.payload;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setAvgRating:(state, action) => {
      state.avgRate = action.payload;
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
  setProductByCategory,
  setDeatils,
  setReviews,
  setAvgRating,
} = productSlice.actions;
export default productSlice.reducer;
