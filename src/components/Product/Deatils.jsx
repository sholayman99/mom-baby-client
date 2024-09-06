import React, { useState } from "react";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import parse from "html-react-parser";
import StarRatings from "react-star-ratings";
import ProductDes from "./ProductDes";

const Deatils = () => {
  const data = useSelector((state) => state.products.details);
  const reviews = useSelector((state) => state.products.reviews);

  const images = [
    {
      original: data?.details?.image1,
      thumbnail: data?.details?.image1,
    },
    {
      original: data?.details?.image2,
      thumbnail: data?.details?.image2,
    },
    {
      original: data?.details?.image3,
      thumbnail: data?.details?.image3,
    },
  ];

  return (
    <main className="lg:p-10 flex flex-col gap-10 items-center justify-center">
      <section className="flex items-start gap-10">
        <div className="grow">
          <div className=" max-h-[60vh]">
            <ImageGallery items={images} autoplay={true} infinite={true} />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="lg:text-4xl text-primary poppins-semibold ">
            {data["title"]}
          </h1>
          <p className="text-accent lg:text-lg">{data?.shortDes}</p>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Effective Price :{" "}
            {data["discount"] ? (
              <span className="lg:text-2xl text-secondary">
                ${data["discountPrice"]}{" "}
                <strike className="lg:text-xl poppins-light text-info">
                  ${data["price"]}
                </strike>
              </span>
            ) : (
              <span>${data["price"]}</span>
            )}
          </h3>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Size :{" "}
            {data?.details?.size.split(",").map((item, i) => {
              return (
                <button className="uppercase focus:border-secondary shadow focus:border-2 border py-1.5 px-3 mr-2 poppins-semibold text-black">
                  {item}
                </button>
              );
            })}
          </h3>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Color :{" "}
            {data?.details?.color.split(",").map((item, i) => {
              return (
                <button className="uppercase focus:border-secondary shadow focus:border-2 border py-1.5 px-3 mr-2 poppins-semibold text-black">
                  {item}
                </button>
              );
            })}
          </h3>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Category :{" "}
            <span className="capitalize poppins-regular text-info">
              {data?.category?.categoryName}
            </span>
          </h3>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Sub Category :{" "}
            <span className="capitalize poppins-regular text-info">
              {data?.subCategory?.subCategoryName}
            </span>
          </h3>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Availability :{" "}
            {data?.stock === true ? (
              <span className="text-green-600 poppins-medium">In Stock</span>
            ) : (
              <span className="text-error poppins-medium">Not in Stock</span>
            )}
          </h3>
          <div className="flex items-center gap-5">
            <button className="btn btn-secondary hover:btn- text-base-100 hover:text-base-100 rounded-full">
              <IoCartOutline />
              Add to Cart
            </button>
            <button className="btn btn-primary hover:btn-secondary text-base-100 hover:text-base-100  rounded-full">
              <FaRegHeart />
              Add to Wish
            </button>
          </div>
        </div>
      </section>
     <ProductDes />
    </main>
  );
};

export default Deatils;
