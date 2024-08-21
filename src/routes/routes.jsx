import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";


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
           }
        ]
    }
]);

export default routes;