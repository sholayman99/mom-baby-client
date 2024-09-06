import React from "react";
import { useSelector } from "react-redux";

const Feature = () => {
  const featureList = useSelector((state) => state.features.featureList);
  return (
    <main className="lg:mt-24 mt-16">
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
          <h2 className="lora-semibold text-secondary lg:text-4xl text-2xl uppercase">
           Features
          </h2>
          <p className="lg:text-xl text-lg text-neutral poppins-regular">
          Our Features and Services
          </p>
        </div>
      {featureList.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <section className="flex flex-col lg:flex-row items-center justify-between px-10 gap-10">
          {featureList.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col justify-center items-center gap-3 p-5  w-64"
              >
                <img className="w-32 h-32" src={item["img"]} />
                <div className="text-center  w-full">
                  <h3 className="poppins-medium text-primary">{item["name"]}</h3>
                  <p className="text-neutral poppins-regular">{item["description"]}</p>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </main>
  );
};

export default Feature;
