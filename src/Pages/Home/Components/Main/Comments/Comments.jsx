import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";

import "../Comments/Comment.css";

import comments from "../../../../../Data/Comment";

const CommentsSlider = () => {
  return (
    <div className="comments-section w-full max-w-250 mx-auto px-2 py-8 md:py-10 mt-40">
      <div className="flex justify-between items-center font-bold">
        <h1 className="text-2xl max-md:text-xl">نظرات مشتریان</h1>
        <p className="text-violet-600 cursor-pointer max-md:text-[13px">
          نمایش همه
        </p>
      </div>

      <Swiper
        className="comments-swiper mt-10"
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {comments.map((item, index) => (
          <SwiperSlide key={index} className="comment-slide">
            <div className="p-2 mt-10 bg-white rounded-lg cursor-pointer hover:shadow-lg transition">
              <div className="flex gap-3 items-center">
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="w-15 rounded-full"
                    loading="lazy"
                  />
                </div>

                <div>
                  <p className="font-bold">{item.profileName}</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-gray-500">{item.comment}</p>
              </div>

              <div className="mt-5">
                <p className="text-violet-600 text-left">{item.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommentsSlider;
