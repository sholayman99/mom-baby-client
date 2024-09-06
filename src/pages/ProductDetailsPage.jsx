import React, { useEffect } from "react";
import Deatils from "../components/Product/Deatils";
import { useParams } from "react-router-dom";
import { avgReviewRequest, productDetailsRequest, productReviewRequest } from "../apiRequest/productRequest";

const ProductDetailsPage = () => {
  const { productID } = useParams();

  useEffect(() => {
    (async () => {
      await productDetailsRequest(productID);
      await productReviewRequest(productID);
      await avgReviewRequest(productID);
    })();
  }, [productID]);

  return (
    <>
      <Deatils />
    </>
  );
};

export default ProductDetailsPage;
