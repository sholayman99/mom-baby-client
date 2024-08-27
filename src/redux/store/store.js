import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../state-slices/sliderSlice";
import settingReducer from "../state-slices/settingSlice";


export default configureStore({
    reducer:{
        sliders:sliderReducer,
        settings:settingReducer,
    }
})