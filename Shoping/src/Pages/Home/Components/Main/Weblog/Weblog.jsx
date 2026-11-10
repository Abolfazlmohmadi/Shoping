import React from "react";
import products from "../../../../../Data/Weblog";

function Weblog() {
  return (
    <>
      <div className="mt-60 px-4 md:px-8">
        {" "}
        <div className="flex justify-between font-bold items-center">
          <p className="text-2xl max-md:text-xl">آخرین مطالب وبلاگ</p>
          <p className="text-violet-600 cursor-pointer max-md:text-[13px]">
            نمایش همه
          </p>
        </div>
        <div className="relative mt-10">
          <div className="mt-7 flex gap-4 items-center overflow-x-auto overflow-y-hidden justify-start md:justify-center">
            {products.map((item) => (
              <div
                className="bg-white rounded-lg cursor-pointer shrink-0 w-70 sm:w-75 md:w-[320px] snap-start transition-shadow"
                key={item.id}
              >
                <div className="w-full h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-base line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                    {item.description}
                  </p>
                  <p className="text-violet-600 text-left mt-4 font-medium">
                    ادامه مطلب
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Weblog;
