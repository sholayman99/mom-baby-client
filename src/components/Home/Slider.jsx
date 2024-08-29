/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Keyboard, Navigation, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import { sliderListRequest } from "../../apiRequest/featureRequest";
import { useSelector } from "react-redux";
import SliderSkeleton from "../../skeletons/SliderSkeleton";

const SwiperComponent = () => {
  useEffect(() => {
    (async () => {
      await sliderListRequest();
    })();
  }, []);

  const sliderList = useSelector((state) => state.sliders.value);

  if (sliderList.length === 0) {
    return <SliderSkeleton />;
  } else {
    return (
      <Swiper
        pagination={{ clickable: true }}
        grabCursor={true}
        keyboard={{ enabled: true }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation, Keyboard]}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#68B5D2",
          "--swiper-pagination-color": "#68B5D2",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {sliderList.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="relative">
                <img src={item["image"]} alt={""} />
                <div className="absolute lg:top-[40%] top-5 lg:right-20 right-5 text-center lg:max-w-[450px] max-w-[150px]">
                  <h1 className="lg:text-6xl text-md poppins-semibold uppercase text-primary">
                    {item["title"]}
                  </h1>
                  <h3 className="lg:text-2xl text-sm text-secondary poppins-medium my-3">
                    {item["des"]}
                  </h3>
                  <button
                    className={
                      "rounded-full btn btn-primary hover:btn-secondary lg:btn-lg btn-xs text-base-100 hover:text-base-100"
                    }
                  >
                    View Collection
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
};

export default SwiperComponent;
