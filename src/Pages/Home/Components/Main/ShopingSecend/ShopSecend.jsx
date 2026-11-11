import React, { useState, useContext } from "react";

import { ShoppingCartIcon } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import ShopDataSecend from "../../../../../Data/ShopDataSecend";
import { CartContext } from "../../../../../Context/CartContext";

function ShopSecend() {
  const [activeTab, setActiveTab] = useState("پرفروش");
  const tabs = ["پرفروش", "جدیدترین", "بیشترین امتیاز"];
  const [number, setNumber] = useState("0");

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#FFFFFF",
            color: "#1E293B",
            borderRadius: "12px",
            padding: "14px 20px",
            boxShadow: "0 4px 16px rgba(124, 58, 237, 0.15)",
            border: "1px solid #EDE9FE",
            fontSize: "14px",
            fontWeight: "500",
            direction: "rtl",
          },
          success: {
            style: {
              background: "#F5F3FF",
              border: "1px solid #7C3AED",
              color: "#5B21B6",
            },
            iconTheme: {
              primary: "#7C3AED",
              secondary: "#FFFFFF",
            },
          },
          error: {
            style: {
              background: "#FEF2F2",
              border: "1px solid #FCA5A5",
              color: "#991B1B",
            },
            iconTheme: {
              primary: "#EF4444",
              secondary: "#FFFFFF",
            },
          },
          loading: {
            style: {
              background: "#F5F3FF",
              border: "1px solid #A78BFA",
              color: "#5B21B6",
            },
          },
        }}
      />
      <div>
        <div className="mt-45 flex items-center justify-between">
          <h1 className="font-bold text-2xl max-md:text-xl">پرفروش ترین ها</h1>
          <p className="text-violet-500 font-bold max-md:text-[13px cursor-pointer">
            مشاهده همه
          </p>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-4 max-md:hidden">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={
                    isActive
                      ? "bg-purple-600 text-white rounded-full px-4 py-2 transition-colors font-bold"
                      : "text-gray-600 hover:text-purple-600 px-4 py-2 transition-colors"
                  }
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-7 flex gap-5 items-center overflow-x-auto overflow-y-hidden justify-start md:justify-center">
          {ShopDataSecend.map((items) => (
            <div
              key={items.id}
              className="w-48 shrink-0 p-2.5 bg-white rounded-md shadow-md cursor-pointer hover:shadow-none transition-all"
            >
              <div className="relative w-44">
                {" "}
                <img
                  src={items.image}
                  alt=""
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute top-2.75 right-31.75 bg-violet-500 px-1 py-0.5 rounded text-white text-sm">
                  {items.discount}%-
                </div>
              </div>

              <div>
                <p className="mt-2">{items.name}</p>
                <p className="text-gray-500">دسته بندی: {items.category}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p>{items.price.toLocaleString()}</p>
                  <p className="font-bold text-violet-600">تومان</p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p
                    className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      items.inStock
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-red-500 bg-red-50"
                    }`}
                  >
                    {items.inStock ? "موجود" : "ناموجود"}
                  </p>
                  <p
                    onClick={() => {
                      if (items.inStock === true) {
                        addToCart(items);
                        toast.success("کالا به سبد خرید شما اضافه شد");
                      } else {
                        toast.error("متاسفانه این کالا ناموجود می باشد");
                      }
                    }}
                    className="flex gap-2 font-bold text-violet-600 border border-violet-800 py-1 px-2.5 rounded-md cursor-pointer  hover:bg-[color-mix(in_oklab,#8B5ACB_10%,transparent)] hover:text-[#8B5ACB] transition"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopSecend;
