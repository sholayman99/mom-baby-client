/* eslint-disable no-unused-vars */
import axios from "axios";
import store from "../redux/store/store";
import { hideLoader, showLoader } from "../redux/state-slices/settingSlice";
import { errorMsg, successMsg } from "../utility/formHelper";
import { getFormData, setFormData } from "../utility/sessionHelper";
import Cookies from "js-cookie";


export async function registreationRequest(fullName,email,password,mobile,avatar){
    store.dispatch(showLoader());
    let postBody = {fullName:fullName,email:email,password:password,mobile:mobile,avatar:avatar};
    setFormData(postBody);
    try{
     let res = await axios.post('/registration',postBody);
     store.dispatch(hideLoader());
     if(res['status'] === 200){
        successMsg("6 digit otp has been sent to your email");
        return true;
     }
     else{
        errorMsg("Something went wrong!!");
        return false;
     }
    }
    catch(error){
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!!");
        return false;
    }
}

export async function otpVerifyRequest(otp){
    store.dispatch(showLoader());
    let postBody = getFormData();
  try{
    let res = await axios.post(`/userVerify/${otp}`,postBody);
    store.dispatch(hideLoader());
    if(res.status === 200){
        successMsg("Verification is complete");
        return true ;
    }
    else{
        errorMsg("Something went wrong!!");
        return false;
    }
  }
  catch(e){
    errorMsg("Something went wrong!!");
    return false;
  }
}

export async function loginRequest(email,password){
  store.dispatch(showLoader());
  let postBody = {email:email,password:password};
  try{
   let res = await axios.post('/login',postBody);
   store.dispatch(hideLoader());
   if(res['status'] === 200){
      Cookies.set("token",res.data['data']);
      successMsg("Logged in");
      return true;
   }
   else{
      errorMsg("Something went wrong!!");
      return false;
   }
  }
  catch(error){
     console.log(error)
      store.dispatch(hideLoader());
      errorMsg("Something went wrong!!");
      return false;
  }
}