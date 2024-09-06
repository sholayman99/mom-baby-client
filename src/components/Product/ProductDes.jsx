import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import StarRatings from "react-star-ratings";

const ProductDes = () => {
  const data = useSelector((state) => state.products.details);
  const reviews = useSelector((state) => state.products.reviews);
  const avgRate = useSelector((state) => state.products.avgRate);

  return (
    <div className="w-full max-w-5xl">
      <TabGroup>
        <TabList
          className="flex justify-center gap-5 mb-10
               py-2"
        >
          <Tab
            className="rounded-md py-1.5 px-4 lg:text-lg text-sm font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
          >
            Product Description
          </Tab>
          <Tab
            className="rounded-md py-1.5 px-4 lg:text-lg text-sm font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
          >
            Reviews
          </Tab>
          <Tab
            className="rounded-md py-1.5 px-4 lg:text-lg text-sm font-semibold text-neutral data-[hover]:text-base-100
                    data-[selected]:text-base-100  focus:outline-none data-[selected]:bg-primary data-[hover]:bg-secondary 
                    data-[focus]:outline-1 data-[focus]:outline-info border"
          >
            Shipping Details
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {data?.details?.desc === undefined ? (
              <h2>Loaading...</h2>
            ) : (
              parse(data?.details?.desc)
            )}
          </TabPanel>
          <TabPanel>
            <div className="flex justify-center items-center flex-col mb-5">
              <h2 className="text-xl poppins-semibold text-neutral">Reviews</h2>
              <h2 className="text-4xl poppins-semibold mt-3 mb-2">
                {avgRate.avgRating}
              </h2>
              <StarRatings
                rating={avgRate.avgRating}
                starRatedColor="#FF9529"
                starDimension="26px"
                starSpacing="2.5px"
              />
              <p className="text-info mt-2 poppins-regular">based on {avgRate.count} reviews</p>
            </div>
            <ul className="grid grid-cols-1 gap-10">
              {reviews.map((item, i) => {
                return (
                  <li key={i} className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-12">
                          <img src={item.user?.avatar} alt="user" />
                        </div>
                      </div>
                      <div>
                        <h3 className="poppins-semibold text-sm text-neutral">
                          {item.profile?.cus_name}
                        </h3>
                        <StarRatings
                          rating={item["rating"]}
                          starRatedColor="#FF9529"
                          starDimension="18px"
                          starSpacing="2px"
                        />
                      </div>
                    </div>
                    <p className="text-info">{item.comment}</p>
                  </li>
                );
              })}
            </ul>
          </TabPanel>
          <TabPanel>
            {data?.details?.desc === undefined ? (
              <h2>Loaading...</h2>
            ) : (
              parse(data?.details?.desc)
            )}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ProductDes;
