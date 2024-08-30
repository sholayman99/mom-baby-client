/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Slider from "../components/Home/Slider"
import CategoryList from '../components/Home/CategoryList';
import { categoryListRequest } from '../apiRequest/productRequest';

const HomePage = () => {
    useEffect(() => {
        (async () => {
          await categoryListRequest();
        })();
      }, []);
    return (
        <div>
           <Slider />
           <CategoryList />
        </div>
    );
};

export default HomePage;