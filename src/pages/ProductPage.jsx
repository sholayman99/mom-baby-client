import React, { useEffect } from 'react';
import ProductList from '../components/Common/ProductList';


const ProductPage = () => {
   useEffect(()=>{
    (async()=>{
      await productListRequest(1, 10);
    })()
   }, [])
    return (
      <div>
       <ProductList />
      </div>
    );
};

export default ProductPage;