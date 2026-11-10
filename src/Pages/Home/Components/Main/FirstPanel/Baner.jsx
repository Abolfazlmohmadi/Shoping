import React from "react";

import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "../FirstPanel/baner.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slidesData from "../../../../../Data/SlideImage";

function Main() {
  return (
    <div className="w-full mx-auto valid-baner mt-40 max-lg:mt-20">
      <div className="rounded-2xl overflow-hidden p-4 w-full">
        <Swiper
          className="banner-swiper"
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 1, spaceBetween: 0 },
            1024: { slidesPerView: 1, spaceBetween: 0 },
          }}
        >
          {slidesData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt={`اسلاید شماره ${item.id}`}
                className="img-baner object-cover"
                loading={"lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Main;
