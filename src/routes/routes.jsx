import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import VerifyAccount from "../components/Auth/VerifyAccount";
import ProductByKeywordPage from "../pages/ProductByKeywordPage";
import ProductByCategoryPage from "../pages/ProductByCategoryPage";




const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
           {
            path:"/",
            element:<HomePage />
           },
           {
            path:'/products',
            element:<ProductPage />
           },
           {
            path:'/register',
            element:<RegisterPage />
           },
           {
            path:'/login',
            element:<LoginPage />
           },
           {
            path:'/otp-verify',
            element:<VerifyAccount />
           },
           {
           path:'product-by-keyword/:keyword',
           element:<ProductByKeywordPage />
           },
           {
            path:'product-by-category/:categoryID',
            element:<ProductByCategoryPage />
           }
        ]
    }
]);

export default routes;