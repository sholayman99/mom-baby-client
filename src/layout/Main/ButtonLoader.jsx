import React from "react";

const ButtonLoader = () => {
  return (
    <div
      className="flex items-center justify-center gap-1 bg-primary lg:py-2.5 py-2 poppins-regular rounded-full w-full
             lg:max-w-sm max-w-xs text-base-100 lg:text-lg text-sm"
    >
      <span className="loading loading-infinity lg:loading-lg loading-md"></span>
      <div>Loading</div>
    </div>
  );
};

export default ButtonLoader;
