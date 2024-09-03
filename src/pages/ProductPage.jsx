import React, { useEffect } from "react";
import ProductList from "../components/Common/ProductList";
import { productListRequest } from "../apiRequest/productRequest";

const ProductPage = () => {
  useEffect(() => {
    (async () => {
      await productListRequest(1, 2);
    })();
  }, []);
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
