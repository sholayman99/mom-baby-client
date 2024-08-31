import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
      {Array.from({ length: 8 }).map((i) => {
        return (
          <div key={i} className="flex justify-center items-center lg:w-52 w-full max-w-sm flex-col gap-10 border
           py-10 rounded-md">
            <div className="skeleton h-24 w-[70%] rounded-md"></div>
            <div>
            <div className="skeleton h-4 mb-5 w-28"></div>
            <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSkeleton;
