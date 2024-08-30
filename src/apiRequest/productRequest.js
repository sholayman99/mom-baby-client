import axios from "axios";
import { setCategory, setRemarkProduct } from "../redux/state-slices/productSlice";
import store from "../redux/store/store";
import { errorMsg } from "../utility/formHelper";


export async function categoryListRequest (){
    try{
         let res = await axios.get('/categoryList');
         if(res.status === 200){
            store.dispatch(setCategory(res.data['data']));
         }
    }
    catch(e){
       errorMsg("Something went wrong!");
    }
}

export async function productByRemarkRequest(remark){
   
   try{
      let res = await axios.get(`/productByRemark/${remark}`);
      console.log(res)
      if(res.status === 200){
         store.dispatch(setRemarkProduct(res.data['data']));
      }
 }
 catch(e){
    errorMsg("Something went wrong!");
 }
}