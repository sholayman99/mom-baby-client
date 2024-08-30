import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { productByRemarkRequest } from "../../apiRequest/productRequest";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const remarkProduct = useSelector((state) => state.products.remarkProduct);
  console.log(remarkProduct);
  return (
    <main className="mt-20">
      <div className="flex flex-col items-center justify-center gap-2 mb-20">
        <h2 className="lora-semibold text-secondary lg:text-4xl text-2xl uppercase">
          Our Products
        </h2>
        <p className="lg:text-xl text-sm text-neutral poppins-regular">
          Explore a World of Choices Across Our Most Popular
        </p>
      </div>

      <section className="lg:px-10 px-5">
        <div className="flex h-screen w-full justify-center">
          <div className="w-full max-w-5xl">
            <TabGroup>
              <TabList
                className="flex justify-center gap-5
               py-2"
              >
                <Tab
                  onClick={() => {
                    productByRemarkRequest("New");
                  }}
                  className="rounded-md py-1.5 px-4  font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
                >
                  New
                </Tab>
                <Tab
                  onClick={() => {
                    productByRemarkRequest("Top");
                  }}
                  className="rounded-md py-1.5 px-4 text-lg font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
                >
                  Top
                </Tab>
                <Tab
                  onClick={() => {
                    productByRemarkRequest("Hot");
                  }}
                  className="rounded-md py-1.5 px-4 text-lg font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
                >
                  Hot
                </Tab>
              </TabList>
              <TabPanels className={"mt-5"}>
                <TabPanel>
                  <div className="grid grid-cols-1 lg:grid-cols-4">
                    {remarkProduct.map((item, i) => {
                      let price = (
                        <p className="text-success my-1 text-xl"> ${item["price"]} </p>
                      );
                      if (item["discount"]) {
                        price = (
                          <p className="text-success my-1 text-xl">
                            ${item["discountPrice"]}
                            <strike className="ml-1.5 text-lg text-info">${item["price"]}</strike>
                          </p>
                        );
                      }
                      return (
                        <Link
                          key={i}
                          className="border hover:border hover:border-primary flex items-center
                                justify-center flex-col rounded-md"
                        >
                          <img className="p-3 " src={item.image} />
                          <div className="bg-secondary/10 w-full flex items-center
                                justify-center flex-col py-4 poppins-regular">
                            <h4 className="text-neutral poppins-medium text-lg">{item["title"]}</h4>
                            {price}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    {remarkProduct.map((item, i) => {
                      let price = (
                        <p className="text-success my-1 text-xl"> ${item["price"]} </p>
                      );
                      if (item["discount"]) {
                        price = (
                          <p className="text-success my-1 text-xl">
                            ${item["discountPrice"]}
                            <strike className="ml-1.5 text-lg text-info">${item["price"]}</strike>
                          </p>
                        );
                      }
                      return (
                        <Link
                          key={i}
                          className="border hover:border hover:border-primary flex items-center
                                justify-center flex-col rounded-md"
                        >
                          <img className="p-3 " src={item.image} />
                          <div className="bg-secondary/10 w-full flex items-center
                                justify-center flex-col py-4 poppins-regular">
                            <h4 className="text-neutral poppins-medium text-lg">{item["title"]}</h4>
                            {price}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    {remarkProduct.map((item, i) => {
                      let price = (
                        <p className="text-success my-1 text-xl"> ${item["price"]} </p>
                      );
                      if (item["discount"]) {
                        price = (
                          <p className="text-success my-1 text-xl">
                            ${item["discountPrice"]}
                            <strike className="ml-1.5 text-lg text-info">${item["price"]}</strike>
                          </p>
                        );
                      }
                      return (
                        <Link
                          key={i}
                          className="border hover:border hover:border-primary flex items-center
                                justify-center flex-col rounded-md"
                        >
                          <img className="p-3 " src={item.image} />
                          <div className="bg-secondary/10 w-full flex items-center
                                justify-center flex-col py-4 poppins-regular">
                            <h4 className="text-neutral poppins-medium text-lg">{item["title"]}</h4>
                            {price}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
