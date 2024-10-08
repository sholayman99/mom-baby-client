import {toast} from "react-hot-toast";
let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
let passRegex = /.{8,}/

class formHelper {
    isEmpty(value){
        return value.length === 0 ;
    }

    isEmail(value){
        return  EmailRegx.test(value);
    }

    isMobile(value){
        return MobileRegx.test(value);
    }

    isPassword(value){
        return passRegex.test(value);
    }

    errorMsg(msg){
        toast.error(msg);
    }

    successMsg(msg){
        toast.success(msg);
    }

    getBase64(file){
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }

    checkFileSize(image){
        let maxSize = 100 * 1024;
        return image <= maxSize
    }

   
}

export const {isEmail,isEmpty,isMobile,errorMsg,isPassword,successMsg,getBase64,checkFileSize} = new formHelper();