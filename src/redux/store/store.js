import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../state-slices/featureSlice";
import settingReducer from "../state-slices/settingSlice";
import productReducer from "../state-slices/productSlice";


export default configureStore({
    reducer:{
        features:sliderReducer,
        settings:settingReducer,
        products:productReducer,
    }
})