import React from "react";
import BrandData from "../../../../../Data/BrandData";

function Brand() {
  return (
    <>
      <div className="mt-40">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold max-md:text-xl">برندهای برتر</h1>
          <p className="text-violet-600 cursor-pointer font-bold max-md:text-[13px]">
            نمایش همه
          </p>
        </div>

        <div className="mt-7 flex gap-3 items-center overflow-x-auto overflow-y-hidden justify-start md:justify-center">
          {BrandData.map((items) => (
            <div
              className="min-w-30 w-40 rounded-[14px] cursor-pointer shrink-0"
              key={items.id}
            >
              <img
                src={items.image}
                alt=""
                className="rounded-[30px] w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Brand;
