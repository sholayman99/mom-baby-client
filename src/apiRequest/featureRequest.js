/* eslint-disable no-unused-vars */
import { setFeatures, setSliders } from "../redux/state-slices/featureSlice";
import store from "../redux/store/store";
import { errorMsg } from "../utility/formHelper";
import axios from "axios";


export async function sliderListRequest (){
    try{
         let res = await axios.get('/sliderList');
         if(res.status === 200){
            store.dispatch(setSliders(res.data['data']));
         }
    }
    catch(e){
       errorMsg("Something went wrong!");
    }
}

export async function featureListRequest (){
   try{
        let res = await axios.get('/featureList');
        if(res.status === 200){
           store.dispatch(setFeatures(res.data['data']));
        }
   }
   catch(e){
      errorMsg("Something went wrong!");
   }
}