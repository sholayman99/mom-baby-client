import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../state-slices/sliderSlice";


export default configureStore({
    reducer:{
        sliders:sliderReducer,
    }
})