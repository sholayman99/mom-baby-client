import React from 'react';

const CategorySkeleton = () => {
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
        <section className="flex items-center gap-20 justify-center mx-auto">
          { Array.from({length: 4}).map((i) => {
            return (
              <div key={i} className="shadow p-4 rounded flex items-center flex-col gap-1">
                <div className="skeleton lg:w-28 lg:h-28 w-16 h-16 shrink-0 rounded-full"></div>
                <div className="skeleton lg:h-4 h-2 lg:w-24 w-16"></div>
              </div>
            );
          })}
        </section>
      </main>
    );
};

export default CategorySkeleton;