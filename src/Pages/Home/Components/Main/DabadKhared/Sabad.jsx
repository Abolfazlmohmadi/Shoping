import { useContext, useState } from "react";
import {
  ChevronLeft,
  ClipboardList,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  PackageX,
  ShieldCheck,
  Truck,
  Tag,
  X,
} from "lucide-react";
import { Link } from "react-router";

import { CartContext } from "../../../../../Context/CartContext";

function Sabad() {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);

  const hasProduct = cart.length > 0;

  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((items) =>
        items.id === id ? { ...items, quantity: items.quantity + 1 } : items,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((items) =>
        items.id === id ? { ...items, quantity: items.quantity - 1 } : items,
      ),
    );
  };

  const Removeitems = (id) => {
    setCart((ite) => ite.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const shippingCost = totalPrice <= 50000000 ? 0 : 100000;

  return (
    <div className="bg-slate-50 min-h-screen" dir="rtl">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* هدر */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex gap-4 items-center">
            <div className="bg-violet-50 p-2.5 rounded-xl">
              <ShoppingCart className="h-6 w-6 text-violet-600" />
            </div>
            <div>
              <p className="block text-xl sm:text-2xl font-bold text-slate-800">
                سبد خرید شما
              </p>
              <p className="block text-sm text-gray-500">
                {hasProduct
                  ? "3 کالا در سبد خرید شما وجود دارد"
                  : "سبد خرید شما خالی است"}
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 h-10 px-4 rounded-lg border border-slate-200 bg-white text-violet-600 hover:bg-slate-50 hover:border-slate-300 transition whitespace-nowrap text-sm">
            <Link to={"/"}>بازگشت</Link>
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        {hasProduct ? (
          <div className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-6 items-start">
            {/* خلاصه سفارش */}
            <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-6">
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex gap-2 items-center text-slate-800 font-medium">
                  <ClipboardList className="h-5 w-5 text-violet-600" />
                  <span>خلاصه سفارش</span>
                </div>

                <div className="flex mt-4 justify-between items-center text-sm">
                  <p className="text-gray-500">قیمت کالاها ({cart.length})</p>
                  <p className="text-slate-700">
                    {totalPrice.toLocaleString()} تومان
                  </p>
                </div>
                <div className="flex mt-3 justify-between items-center text-sm">
                  <p className="text-gray-500 flex items-center gap-1.5">
                    <Truck className="h-4 w-4" />
                    هزینه ارسال
                  </p>
                  <p className="text-green-600 font-medium">
                    {shippingCost === 0
                      ? "رایگان"
                      : `${shippingCost.toLocaleString()} تومان`}
                  </p>
                </div>

                <div className="mt-4">
                  <button className="flex items-center gap-1.5 text-violet-600 hover:underline text-sm">
                    <Tag className="h-4 w-4" />
                    افزودن کد تخفیف
                  </button>
                </div>

                <hr className="w-full text-gray-200 my-4" />

                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">مبلغ قابل پرداخت</p>
                  <p className="text-violet-600 font-bold text-lg">
                    {totalPrice.toLocaleString()}
                    <span className="text-xs font-normal text-gray-500">
                      {" "}
                      تومان
                    </span>
                  </p>
                </div>

                <button className="bg-violet-600 w-full text-white p-3 rounded-lg mt-4 hover:bg-violet-700 transition font-medium text-sm">
                  ثبت سفارش
                </button>

                <div className="flex items-center gap-1.5 justify-center mt-4 text-xs text-gray-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>ضمانت بازگشت وجه تا ۷۲ ساعت</span>
                </div>
              </div>
            </div>

            {/* لیست محصولات */}
            <div className="flex-1 w-full min-w-0">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">
                {cart.map((items) => (
                  <div
                    className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4"
                    key={items.id}
                  >
                    <img
                      src={items.image}
                      alt="کتری برقی فیلیپس مدل HD9012"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover border border-slate-100 shrink-0 mx-auto sm:mx-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex justify-between items-start gap-3">
                        <div className="min-w-0">
                          <p className="text-slate-800 text-sm sm:text-[15px] font-medium leading-6 line-clamp-2">
                            {items.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            فروشنده: فروشگاه لوازم خانگی نوین
                          </p>
                        </div>
                        <button
                          className="text-gray-400 hover:text-red-500 transition shrink-0 p-1"
                          aria-label="حذف کالا"
                          onClick={() => Removeitems(items.id)}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex flex-wrap justify-between items-end gap-3 mt-auto pt-4">
                        <div className="flex items-center gap-3 border border-slate-200 rounded-lg px-1 h-9 w-fit">
                          <button
                            onClick={() => increaseQuantity(items.id)}
                            className="p-1 text-violet-600 hover:bg-slate-50 rounded"
                            aria-label="افزودن تعداد"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-4 text-center text-sm text-slate-700">
                            {items.quantity}
                          </span>
                          <button
                            disabled={items.quantity === 1}
                            className={`p-1 text-slate-500 hover:bg-slate-50 rounded${
                              items.quantity === 1
                                ? "text-gray-300 cursor-not-allowed"
                                : "text-slate-500 hover:bg-slate-50"
                            }`}
                            onClick={() => decreaseQuantity(items.id)}
                            aria-label="کم کردن تعداد"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-gray-400 line-through">
                            1,450,000 تومان
                          </p>
                          <p className="text-violet-600 font-bold text-sm sm:text-base">
                            {(items.price * items.quantity).toLocaleString()}
                            <span className="text-xs font-normal text-gray-500">
                              {" "}
                              تومان
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <button className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm transition">
                  <Trash2 className="h-4 w-4" />
                  <span onClick={clearCart}>خالی کردن سبد خرید</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 bg-white border border-dashed border-slate-200 rounded-xl py-20 px-6">
            <div className="bg-slate-50 p-4 rounded-full">
              <PackageX className="h-10 w-10 text-slate-300" />
            </div>
            <div className="text-center">
              <p className="text-slate-700 font-medium">
                سبد خرید شما خالی است
              </p>
              <p className="text-gray-400 text-sm mt-1">
                محصولی که می‌پسندید را به سبد خرید اضافه کنید
              </p>
            </div>
            <Link
              to={"/"}
              className="flex items-center gap-2 h-10 px-5 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition text-sm"
            >
              مشاهده محصولات
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sabad;
