import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../state-slices/sliderSlice";
import settingReducer from "../state-slices/settingSlice";
import productReducer from "../state-slices/productSlice";


export default configureStore({
    reducer:{
        sliders:sliderReducer,
        settings:settingReducer,
        products:productReducer,
    }
})