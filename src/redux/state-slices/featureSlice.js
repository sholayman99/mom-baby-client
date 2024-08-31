import {createSlice} from "@reduxjs/toolkit";


export const sliderSlice = createSlice({
    name:"sliders",
    initialState:{
        value:[],
        featureList:[],
    },
    reducers:{
        setSliders:(state,action)=>{
            state.value = action.payload
        },
        setFeatures:(state,action)=>{
            state.featureList = action.payload;
        }
    }
});

export const {setSliders,setFeatures} = sliderSlice.actions;
export default sliderSlice.reducer;