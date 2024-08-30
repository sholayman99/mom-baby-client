import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { categoryListRequest } from "../../apiRequest/productRequest";
import { Link } from "react-router-dom";
import CategorySkeleton from "../../skeletons/CategorySkeleton";

const CategoryList = () => {
  const categoryList = useSelector((state) => state.products.categoryList);
  useEffect(() => {
    (async () => {
      await categoryListRequest();
    })();
  }, []);

  if (categoryList.length === 0) {
    return <CategorySkeleton />;
  } else {
    return (
      <main className="my-24">
        <div className="flex flex-col items-center justify-center gap-3 mb-14">
          <h2 className="lora-semibold text-secondary lg:text-4xl text-2xl">
            Top Categories
          </h2>
          <p className="uppercase lg:text-4xl text-2xl text-info poppins-semibold">
            Choose your category
          </p>
        </div>
        <section className="grid lg:grid-cols-4 grid-cols-2 gap-10 lg:px-10 px-5">
          {categoryList.map((item, i) => {
            return (
              <Link to={"/"}
                key={i}
                className="shadow p-4 rounded flex items-center flex-col gap-1 max-w-xs
                 hover:bg-primary text-primary hover:text-base-100 hover:transition ease-in-out delay-100"
              >
                <img className="lg:w-28 lg:h-28 w-16 h-16 rounded-full" src={item.image} />
                <h3 className="poppins-medium lg:text-lg text-sm">
                  {item["categoryName"]}
                </h3>
              </Link>
            );
          })}
        </section>
      </main>
    );
  }
};

export default CategoryList;
