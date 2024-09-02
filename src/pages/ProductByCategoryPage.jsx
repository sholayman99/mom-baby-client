import React, { useEffect } from 'react';
import ProductList from '../components/Common/ProductList';
import { useParams } from 'react-router-dom';
import { productByCatgegoryRequest } from '../apiRequest/productRequest';

const ProductByCategoryPage = () => {
    const {categoryID} = useParams();
    useEffect(() => {
        (async () => {
          await productByCatgegoryRequest(1,10,categoryID);
        })();
      },[]);
    return (
        <div>
        <ProductList />    
        </div>
    );
};

export default ProductByCategoryPage;