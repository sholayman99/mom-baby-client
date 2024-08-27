/* eslint-disable no-unused-vars */
import axios from "axios";
import store from "../redux/store/store";
import { hideLoader, showLoader } from "../redux/state-slices/settingSlice";
import { errorMsg, successMsg } from "../utility/formHelper";


export async function registreationRequest(fullName,email,password,mobile,avatar){
    store.dispatch(showLoader());
    let postBody = {fullName:fullName,email:email,password:password,mobile:mobile,avatar:avatar};
    try{
     let res = await axios.post('/registration',postBody);
     store.dispatch(hideLoader());
     if(res['status'] === 200){
        successMsg("6 digit otp has been sent to your email");
        return true
     }
     else{
        return false
     }
    }
    catch(error){
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!!");
        return false
    }
}