import React, { useEffect } from "react";
import Deatils from "../components/Home/Deatils";
import { useParams } from "react-router-dom";
import { productDetailsRequest } from "../apiRequest/productRequest";

const ProductDetailsPage = () => {
  const { productID } = useParams();

  useEffect(() => {
    (async () => {
      await productDetailsRequest(productID);
    })();
  }, [productID]);

  return (
    <>
      <Deatils />
    </>
  );
};

export default ProductDetailsPage;
