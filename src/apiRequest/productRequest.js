import axios from "axios";
import { setCategory, setProductByKeyword, setProductList, setRemarkProduct, setSubCategory } from "../redux/state-slices/productSlice";
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

export async function subCategoryListRequest (){
   try{
        let res = await axios.get('/subCategoryList');
        if(res.status === 200){
           store.dispatch(setSubCategory(res.data['data']));
        }
   }
   catch(e){
      errorMsg("Something went wrong!");
   }
}

export async function productByRemarkRequest(remark){
   
   try{
      let res = await axios.get(`/productByRemark/${remark}`);
      if(res.status === 200){
         store.dispatch(setRemarkProduct(res.data['data']));
      }
 }
 catch(e){
    errorMsg("Something went wrong!");
 }
}

export async function productListRequest(pageNo,perPage){
   try{
      let res = await axios.get(`/productList/${pageNo}/${perPage}`);
      if(res.status === 200){
         store.dispatch(setProductList(res.data['data']));
      }
 }
 catch(e){
    errorMsg("Something went wrong!");
 }
}

export async function productByKeywordRequest(pageNo,perPage,keyword){
   try{
      let res = await axios.get(`/productByKeyword/${pageNo}/${perPage}/${keyword}`);
      if(res.status === 200){
         store.dispatch(setProductByKeyword(res.data['data']));
      }
 }
 catch(e){
    errorMsg("Something went wrong!");
 }
}