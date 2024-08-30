/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Slider from "../components/Home/Slider"
import CategoryList from '../components/Home/CategoryList';
import { categoryListRequest, productByRemarkRequest } from '../apiRequest/productRequest';
import Products from '../components/Home/Products';

const HomePage = () => {
    useEffect(() => {
        (async () => {
          await categoryListRequest();
          await productByRemarkRequest("New")
        })();
      }, []);
    return (
        <div>
           <Slider />
           <CategoryList />
           <Products />
        </div>
    );
};

export default HomePage;