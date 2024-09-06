import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { productByRemarkRequest } from "../../apiRequest/productRequest";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import ProductSkeleton from "../../skeletons/ProductSkeleton";

const Products = () => {
  const remarkProduct = useSelector((state) => state.products.remarkProduct);

  return (
    <main className="lg:mt-24 mt-16">
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <h2 className="lora-semibold text-secondary lg:text-4xl text-2xl uppercase">
          Our Products
        </h2>
        <p className="lg:lg:text-lg text-md text-sm text-neutral poppins-regular">
          Explore a World of Choices Across Our Most Popular
        </p>
      </div>

      <section className="lg:px-10 px-5">
        <div className="flex min-h-screen w-full justify-center">
          <div className="w-full max-w-5xl">
            <TabGroup>
              <TabList
                className="flex justify-center gap-5 mb-20
               py-2"
              >
                <Tab
                  onClick={() => {
                    productByRemarkRequest("New");
                  }}
                  className="rounded-md py-1.5 px-4 lg:text-lg text-sm font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
                >
                  New
                </Tab>
                <Tab
                  onClick={() => {
                    productByRemarkRequest("Top");
                  }}
                  className="rounded-md py-1.5 px-4 lg:text-lg text-sm font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
                >
                  Top
                </Tab>
                <Tab
                  onClick={() => {
                    productByRemarkRequest("Hot");
                  }}
                  className="rounded-md py-1.5 px-4 lg:text-lg text-sm font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
                >
                  Hot
                </Tab>
                <Tab
                  onClick={() => {
                    productByRemarkRequest("Trending");
                  }}
                  className="rounded-md py-1.5 px-4 lg:text-lg text-sm font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
                >
                  Trending
                </Tab>
              </TabList>
              <TabPanels className={"mt-5"}>
                <TabPanel>
                  {remarkProduct.length === 0 ? (
                    <ProductSkeleton />
                  ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {remarkProduct.map((item, i) => {
                        let price = (
                          <p className="text-success my-1 lg:text-lg text-md">
                            {" "}
                            ${item["price"]}{" "}
                          </p>
                        );
                        if (item["discount"]) {
                          price = (
                            <p className="text-success my-1 lg:text-lg text-xs">
                              ${item["discountPrice"]}
                              <strike className="ml-1.5 lg:text-lg text-xs text-info">
                                ${item["price"]}
                              </strike>
                            </p>
                          );
                        }
                        return (
                          <Link to={`/details/${item['_id']}`}
                            key={i}
                            className="border hover:border hover:border-primary flex items-center
                              justify-center flex-col rounded-md"
                          >
                            <img className="p-3 h-52 w-48 lg:h-72 lg:w-62 " src={item.image} />
                            <div
                              className="bg-secondary/10 w-full flex items-center
                              justify-center flex-col p-2 poppins-regular"
                            >
                              <h4 className="text-neutral text-center poppins-medium lg:text-lg text-xs">
                                {item["title"]}
                              </h4>
                              {price}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </TabPanel>
                <TabPanel>
                  {remarkProduct.length === 0 ? (
                    <ProductSkeleton />
                  ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                      {remarkProduct.map((item, i) => {
                        let price = (
                          <p className="text-success my-1 lg:text-lg text-md">
                            {" "}
                            ${item["price"]}{" "}
                          </p>
                        );
                        if (item["discount"]) {
                          price = (
                            <p className="text-success my-1 lg:text-lg text-sm">
                              ${item["discountPrice"]}
                              <strike className="ml-1.5 lg:text-lg text-sm text-info">
                                ${item["price"]}
                              </strike>
                            </p>
                          );
                        }
                        return (
                          <Link to={`/details/${item['_id']}`}
                            key={i}
                            className="border hover:border hover:border-primary flex items-center
                              justify-center flex-col rounded-md"
                          >
                            <img className="p-3 h-52 w-48 lg:h-72 lg:w-62 " src={item.image} />
                            <div
                              className="bg-secondary/10 w-full flex items-center
                              justify-center flex-col py-4 poppins-regular"
                            >
                              <h4 className="text-neutral text-center poppins-medium lg:text-lg text-sm">
                                {item["title"]}
                              </h4>
                              {price}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </TabPanel>
                <TabPanel>
                  {remarkProduct.length === 0 ? (
                    <ProductSkeleton />
                  ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                      {remarkProduct.map((item, i) => {
                        let price = (
                          <p className="text-success my-1 lg:text-lg text-md">
                            {" "}
                            ${item["price"]}{" "}
                          </p>
                        );
                        if (item["discount"]) {
                          price = (
                            <p className="text-success my-1 lg:text-lg text-sm">
                              ${item["discountPrice"]}
                              <strike className="ml-1.5 lg:text-lg text-sm text-info">
                                ${item["price"]}
                              </strike>
                            </p>
                          );
                        }
                        return (
                          <Link to={`/details/${item['_id']}`}
                            key={i}
                            className="border hover:border hover:border-primary flex items-center
                              justify-center flex-col rounded-md"
                          >
                            <img className="p-3 h-52 w-48 lg:h-72 lg:w-62 " src={item.image} />
                            <div
                              className="bg-secondary/10 w-full flex items-center
                              justify-center flex-col py-4 poppins-regular"
                            >
                              <h4 className="text-neutral text-center poppins-medium lg:text-lg text-sm">
                                {item["title"]}
                              </h4>
                              {price}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </TabPanel>
                <TabPanel>
                  {remarkProduct.length === 0 ? (
                    <ProductSkeleton />
                  ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                      {remarkProduct.map((item, i) => {
                        let price = (
                          <p className="text-success my-1 lg:text-lg text-md">
                            {" "}
                            ${item["price"]}{" "}
                          </p>
                        );
                        if (item["discount"]) {
                          price = (
                            <p className="text-success my-1 lg:text-lg text-sm">
                              ${item["discountPrice"]}
                              <strike className="ml-1.5 lg:text-lg text-sm text-info">
                                ${item["price"]}
                              </strike>
                            </p>
                          );
                        }
                        return (
                          <Link to={`/details/${item['_id']}`}
                            key={i}
                            className="border hover:border hover:border-primary flex items-center
                              justify-center flex-col rounded-md"
                          >
                            <img className="p-3 h-52 w-48 lg:h-72 lg:w-62" src={item.image} />
                            <div
                              className="bg-secondary/10 w-full flex items-center
                              justify-center flex-col py-4 poppins-regular"
                            >
                              <h4 className="text-neutral text-center poppins-medium lg:text-lg text-sm">
                                {item["title"]}
                              </h4>
                              {price}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </TabPanel>
              </TabPanels>
            </TabGroup>
            <div className="flex justify-end items-center">
              <Link to="/products"
                className="flex items-center text-primary  border-primary py-1 px-3 gap-2
            hover:border  rounded-md mt-5"
              >
                <span className="lg:text-lg text-md">
                  <BsEyeFill />
                </span>
                <p className="poppins-medium">See all</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
