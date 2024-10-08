import axios from "axios";
import { setAvgRating, setCategory, setDeatils, setProductByCategory, setProductByFilter, setProductByKeyword, setProductList, setRemarkProduct, setReviews, setSubCategory, setTotal } from "../redux/state-slices/productSlice";
import store from "../redux/store/store";
import { errorMsg } from "../utility/formHelper";
import { unauthorized } from "../utility/sessionHelper";


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
         store.dispatch(setTotal(res.data['total']));
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
         store.dispatch(setTotal(res.data['total']));
      }
 }
 catch(e){
    errorMsg("Something went wrong!");
 }
}

export async function productByFilterRequest(pageNo,perPage,postBody){
   try{
      let res = await axios.post(`/productByFilter/${pageNo}/${perPage}`,postBody);
      if(res.status === 200){
         store.dispatch(setProductByFilter(res.data['data']));
         store.dispatch(setTotal(res.data['total']));
      }
 }
 catch(e){
    errorMsg("Something went wrong!");
 }
}

export async function productDetailsRequest(id){
   try{
      let res = await axios.get(`/productDetails/${id}`);
      if(res.status === 200){
         store.dispatch(setDeatils(res.data['data'][0]));
      }
 }
 catch(e){
    unauthorized(e.response.status)
    errorMsg("Unauthorized!");
 }
}

export async function productByCatgegoryRequest(pageNo,perPage,categoryID){
   try{
      let res = await axios.get(`/productByCategory/${pageNo}/${perPage}/${categoryID}`);
      if(res.status === 200){
         store.dispatch(setProductByCategory(res.data['data']));
      }
 }
 catch(e){
    errorMsg("Something went wrong!");
 }
}


export async function productReviewRequest(productID){
   try{
      let res = await axios.get(`/productReview/${productID}`);
      if(res.status === 200){
         store.dispatch(setReviews(res.data['data']));
      }
 }
 catch(e){
    errorMsg("Something went wrong!");
 }
}

export async function avgReviewRequest(productID){
   try{
      let res = await axios.get(`/avgProductRating/${productID}`);
      if(res.status === 200){
         store.dispatch(setAvgRating(res.data['data'][0]));
      }
 }
 catch(e){
    errorMsg("Something went wrong!");
 }
}