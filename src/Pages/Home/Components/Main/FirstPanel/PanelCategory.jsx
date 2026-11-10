import React from "react";
import panel from "../../../../../Data/PanelCategory";

function PanelCategory() {
  return (
    <section className="mt-30">
      <h2 className="text-2xl font-bold max-md:text-xl">دسته بندی های محبوب</h2>

      <div className="mt-7 flex items-center justify-start gap-6 overflow-x-auto overflow-y-hidden md:justify-center">
        {panel.map((item) => (
          <div key={item.id} className="shrink-0 cursor-pointer text-center">
            <img
              src={item.image}
              alt={item.title}
              width="150"
              height="150"
              className="block w-30 h-30 object-contain shadow-lg"
              loading="lazy"
              decoding="async"
            />

            <span className="mt-4 block text-center font-bold">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PanelCategory;
