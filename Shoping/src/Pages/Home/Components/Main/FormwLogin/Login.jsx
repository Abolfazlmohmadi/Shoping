import React, { useState } from "react";
import { FiShoppingBag, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";

export default function NovinStoreLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [valueNumber, setValueNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (valueNumber.length !== 11) {
      toast.error("شماره موبایل باید دقیقاً ۱۱ رقم باشد");
      return;
    }
    if (!/^\d+$/.test(valueNumber)) {
      toast.error("شماره موبایل فقط باید شامل عدد باشد");
      return;
    }

    if (password.length < 8) {
      toast.error("رمز عبور حداقل باید ۸ کاراکتر باشد");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("رمز عبور باید حداقل یک حرف بزرگ (A-Z) داشته باشد");
      return;
    }
    if (!/[@]/.test(password)) {
      toast.error("رمز عبور باید حداقل یک علامت @ داشته باشد");
      return;
    }

    toast.success("ورود با موفقیت انجام شد!");

    setValueNumber("");
    setPassword("");
    setRemember(false);
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: "'Vazirmatn', 'Tahoma', sans-serif",
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
      <div
        dir="rtl"
        className="min-h-screen w-full bg-white flex items-center justify-center p-4"
      >
        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-violet-100">
          {/* بخش راست - بدون تغییر */}
          <div className="hidden md:flex md:w-5/12 relative bg-linear-to-br from-violet-600 via-violet-700 to-violet-900 p-10 flex-col justify-between overflow-hidden h-[95vh]">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>
            <div className="absolute top-1/3 -left-16 w-52 h-52 rounded-full bg-white/5"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 rounded-full bg-white/10"></div>
            <div className="absolute bottom-16 left-8 w-16 h-16 rounded-full border-2 border-white/20"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-10">
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-md">
                  <FiShoppingBag className="w-6 h-6 text-violet-700" />
                </div>
                <span className="text-white text-2xl font-extrabold tracking-tight">
                  نوین‌استور
                </span>
              </div>

              <h2 className="text-white text-3xl font-bold leading-relaxed mb-4">
                به فروشگاه نوین
                <br />
                خوش برگشتی
              </h2>
              <p className="text-violet-200 text-sm leading-loose max-w-xs">
                وارد حساب کاربریت شو و از تخفیف‌های ویژه، پیگیری سفارش‌ها و خرید
                سریع‌تر لذت ببر.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <span className="text-violet-100 text-xs">
                بیش از ۵۰ هزار مشتری راضی
              </span>
            </div>
          </div>

          {/* بخش فرم */}
          <div className="w-full md:w-7/12 p-8 sm:p-12 h-[95vh]">
            <div className="max-w-sm mx-auto">
              <div className="flex max-md:hidden items-center gap-2 mb-8 justify-center md:hidden">
                <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
                  <FiShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="text-violet-700 text-xl font-extrabold">
                  نوین‌استور
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
                ورود به حساب کاربری
              </h1>
              <p className="text-gray-500 text-sm mb-8 text-center">
                برای ادامه خرید، وارد حساب خود شوید
              </p>

              <form className="space-y-5">
                {/* فیلد شماره موبایل */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    شماره موبایل
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <FiMail className="w-5 h-5" />
                    </span>
                    <input
                      maxLength={11}
                      value={valueNumber}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d*$/.test(val)) {
                          setValueNumber(val);
                        }
                      }}
                      type="text"
                      inputMode="numeric"
                      placeholder="مثال: 0912xxxxxxx"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
                    />
                  </div>
                </div>

                {/* فیلد رمز عبور */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رمز عبور
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <FiLock className="w-5 h-5" />
                    </span>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      placeholder="رمز عبور خود را وارد کنید"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-11 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 left-3 flex items-center text-gray-400 hover:text-violet-600 transition"
                    >
                      {showPassword ? (
                        <FiEyeOff className="w-5 h-5" />
                      ) : (
                        <FiEye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* گزینه‌های یادآوری و فراموشی */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer select-none text-gray-600">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                      className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                    />
                    مرا به خاطر بسپار
                  </label>
                  <a
                    href="#"
                    className="text-violet-600 font-medium hover:text-violet-800 transition"
                  >
                    فراموشی رمز عبور؟
                  </a>
                </div>

                {/* دکمه ورود */}
                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-semibold py-3.5 rounded-xl transition shadow-md shadow-violet-200 cursor-pointer"
                >
                  ورود به حساب
                </button>

                {/* خط جداکننده */}
                <div className="flex items-center gap-3 py-2">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-xs text-gray-400">یا</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* دکمه‌های گوگل و اپل */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm text-gray-700">
                    <FcGoogle className="w-5 h-5" />
                    گوگل
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm text-gray-700">
                    <FaApple className="w-5 h-5" />
                    اپل
                  </button>
                </div>
              </form>

              {/* لینک ثبت‌نام */}
              <p className="text-center text-sm text-gray-500 mt-8">
                حساب کاربری نداری؟{" "}
                <Link
                  to="/singup"
                  className="text-violet-600 font-semibold hover:text-violet-800 transition"
                >
                  ثبت‌نام کن
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
