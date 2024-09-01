import React from 'react';
import ProductList from '../components/Common/ProductList';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { productByKeywordRequest } from '../apiRequest/productRequest';

const ProductByKeywordPage = () => {
    const {keyword} = useParams();
    

    useEffect(()=>{
        (async()=>{
          await productByKeywordRequest(1,10,keyword);
        })()
    },[])

    return (
        <div>
          <ProductList />  
        </div>
    );
};

export default ProductByKeywordPage;