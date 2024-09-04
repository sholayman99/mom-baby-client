import React, { useState } from "react";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import parse from 'html-react-parser';

const Deatils = () => {
  const data = useSelector((state) => state.products.details);

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
        <div className="flex-1">
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
            Effective Price:{" "}
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
            Size:{" "}
            {data?.details?.size.split(",").map((item, i) => {
              return (
                <button className="uppercase focus:border-secondary shadow focus:border-2 border py-1.5 px-3 mr-2 poppins-semibold text-black">
                  {item}
                </button>
              );
            })}
          </h3>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Color:{" "}
            {data?.details?.color.split(",").map((item, i) => {
              return (
                <button className="uppercase focus:border-secondary shadow focus:border-2 border py-1.5 px-3 mr-2 poppins-semibold text-black">
                  {item}
                </button>
              );
            })}
          </h3>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Category:{" "}
            <span className="capitalize poppins-regular text-info text-sm">
              {data?.category?.categoryName}
            </span>
          </h3>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Sub Category:{" "}
            <span className="capitalize poppins-regular text-info text-sm">
              {data?.subCategory?.subCategoryName}
            </span>
          </h3>
          <h3 className="lg:text-md poppins-semibold text-neutral">
            Availability:{" "}
            {data?.stock === true ? (
              <span className="text-green-600 poppins-medium">In Stock</span>
            ) : (
              <span className="text-error poppins-medium">Not in Stock</span>
            )}
          </h3>
          <div className="flex items-center gap-5">
            <button className="btn btn-primary hover:btn-secondary text-base-100 hover:text-base-100 rounded-full">
              <IoCartOutline />
              Add to Cart
            </button>
            <button className="btn btn-primary hover:btn-secondary text-base-100 hover:text-base-100  rounded-full">
              <FaRegHeart />
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <div>
            <TabGroup>
              <TabList
                className="flex items-center gap-16 mb-5 justify-center border shadow py-4 w-full"
              >
                <Tab
                  className={
                    "text-xl text-neutral data-[selected]:poppins-medium data-[selected]:text-secondary data-[selected]:border-secondary p-3 data-[selected]:border-b-2 data-[hover]:text-secondary"
                  }
                >
                  Product Derscription
                </Tab>
                <Tab
                   className={
                    "text-xl text-neutral data-[selected]:poppins-medium data-[selected]:text-secondary data-[selected]:border-secondary p-3 data-[selected]:border-b-2 data-[hover]:text-secondary"
                  }
                >
                  Reviews
                </Tab>
                <Tab
                   className={
                    "text-xl text-neutral data-[selected]:poppins-medium data-[selected]:text-secondary data-[selected]:border-secondary p-3 data-[selected]:border-b-2 data-[hover]:text-secondary"
                  }
                >
                  Shipping Details
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel className="p-3">
                  {
                   data?.details?.desc === undefined? <h2>Loaadinggg</h2>:parse(data?.details?.desc)
                  }
                </TabPanel>
                <TabPanel className="p-3">
                  {
                   data?.details?.desc === undefined? <h2>Loaadinggg</h2>:parse(data?.details?.desc)
                  }
                </TabPanel>
                <TabPanel className="p-3">
                  {
                   data?.details?.desc === undefined? <h2>Loaadinggg</h2>:parse(data?.details?.desc)
                  }
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
    </main>
  );
};

export default Deatils;
