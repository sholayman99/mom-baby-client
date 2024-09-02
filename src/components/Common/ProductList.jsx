import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  categoryListRequest,
  productByFilterRequest,
  subCategoryListRequest,
} from "../../apiRequest/productRequest";
import { Link } from "react-router-dom";
import ProductSkeleton from "../../skeletons/ProductSkeleton";

const ProductList = () => {
  const categoryList = useSelector((state) => state.products.categoryList);
  const subCategoryList = useSelector(
    (state) => state.products.subCategoryList
  );
  const productList = useSelector((state) => state.products.productList);

  const [filter, setFilter] = useState({
    subCategoryID: "",
    categoryID: "",
    priceMin: "",
    priceMax: "",
  });


  const inputOnChange=async(key,value)=>{
    setFilter((data)=>({
      ...data,
      [key]:value
    }))
  }

  useEffect(() => {
    (async () => {
      await categoryListRequest();
      await subCategoryListRequest();
      let isEveryFilterPropertyEmpty=Object.values(filter).every(value => value==="");
      !isEveryFilterPropertyEmpty?await productByFilterRequest(1,10,filter):<></>;
    })();
  }, [filter]);

  return (
    <main className="">
      <div className="flex flex-col lg:flex-row lg:px-5 lg:py-10 p-3 gap-10">
        <section className="grid grid-cols-2 lg:grid-cols-1  gap-5 min-w-[200px]">
          <select value={filter.categoryID} onChange={async(e)=>await inputOnChange("categoryID",e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500
      px-4 py-1 h-10 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline lg:text-[16px] text-xs"
          >
            <option>Choose Category</option>
            {categoryList.map((item, i) => {
              return (
                <>
                  <option value={item['_id']} className="text-info" key={i}>
                    {item["categoryName"]}
                  </option>
                </>
              );
            })}
          </select>
          <select value={filter.subCategoryID} onChange={async(e)=>await inputOnChange("subCategoryID",e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500
      px-4 py-1 h-10 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline lg:text-[16px] text-xs "
          >
            <option>Choose SubCategory</option>
            {subCategoryList.map((item, i) => {
              return (
                <>
                  <option value={item['_id']} className="text-info" key={i}>
                    {item["subCategoryName"]}
                  </option>
                </>
              );
            })}
          </select>
          <div className="form-control">
            <label className="block text-gray-600 text-xs poppins-semibold mb-1">
              Max Price:${filter.priceMax}
            </label>
            <input value={filter.priceMax} onChange={async(e)=>await inputOnChange("priceMax",e.target.value)}
              type="range"
              min={"0"}
              max={"5000"}
              step={"100"}
              className="w-full lg:h-2.5 h-1.5  rounded-lg appearance-none cursor-pointer bg-secondary"
            />
            <label className="block text-gray-600 text-xs poppins-semibold mb-1 mt-3">
              Min Price:${filter.priceMin}
            </label>
            <input value={filter.priceMin} onChange={async(e)=>await inputOnChange("priceMin",e.target.value)}
              type="range"
              min={"0"}
              max={"5000"}
              step={"100"}
              className="w-full lg:h-2.5 h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </section>
        <section className="">
          {productList.length === 0 ? (
            <ProductSkeleton />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {productList.map((item, i) => {
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
                  <Link
                    key={i}
                    className="border hover:border hover:border-primary flex items-center
                              justify-center flex-col rounded-md"
                  >
                    <img
                      className="p-3 h-52 w-48 lg:h-64 lg:w-62 "
                      src={item.image}
                    />
                    <div
                      className="bg-secondary/10 w-full flex items-center
                              justify-center flex-col p-2 poppins-regular h-[30%]"
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
        </section>
      </div>
    </main>
  );
};

export default ProductList;
