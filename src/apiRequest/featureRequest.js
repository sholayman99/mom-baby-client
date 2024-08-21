/* eslint-disable no-unused-vars */
import { setSliders } from "../redux/state-slices/sliderSlice";
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