/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Slider from "../components/Product/Slider"
import CategoryList from '../components/Product/CategoryList';
import { categoryListRequest, productByRemarkRequest } from '../apiRequest/productRequest';
import Products from '../components/Product/Products';
import Feature from '../components/Feature/Feature';
import { featureListRequest } from '../apiRequest/featureRequest';

const HomePage = () => {
    useEffect(() => {
        (async () => {
          await categoryListRequest();
          await productByRemarkRequest("New")
          await featureListRequest();
        })();
      }, []);
    return (
        <div>
           <Slider />
           <CategoryList />
           <Products />
           <Feature />
        </div>
    );
};

export default HomePage;