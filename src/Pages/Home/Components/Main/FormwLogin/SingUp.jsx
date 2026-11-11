import React, { useState } from "react";
import {
  FiShoppingBag,
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

export default function NovinStoreSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // تابع ثبت‌نام
  const handleSignup = () => {
    // ۱. اعتبارسنجی نام و نام خانوادگی
    if (fullName.trim().length < 3) {
      toast.error("نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد");
      return;
    }

    // ۲. اعتبارسنجی شماره موبایل
    if (phone.length !== 11) {
      toast.error("شماره موبایل باید دقیقاً ۱۱ رقم باشد");
      return;
    }
    if (!/^\d+$/.test(phone)) {
      toast.error("شماره موبایل فقط باید شامل عدد باشد");
      return;
    }

    // ۳. اعتبارسنجی رمز عبور
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

    // ۵. پذیرش قوانین
    if (!agree) {
      toast.error("لطفاً قوانین و مقررات را بپذیرید");
      return;
    }

    // ۶. موفقیت
    toast.success("حساب کاربری با موفقیت ساخته شد!");

    setTimeout(() => {
      navigate("/");
    }, 3000);

    // ۷. خالی کردن فیلدها
    setFullName("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setAgree(false);
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
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
      <div
        dir="rtl"
        className="min-h-screen w-full bg-white flex items-center justify-center p-4"
      >
        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-violet-100">
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
                به خانواده نوین
                <br />
                بپیوند
              </h2>
              <p className="text-violet-200 text-sm leading-loose max-w-xs">
                با ساخت حساب کاربری، از تخفیف‌های ویژه، پیگیری سفارش‌ها و خرید
                سریع‌تر بهره‌مند شو.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <span className="text-violet-100 text-xs">
                بیش از ۵۰ هزار مشتری راضی
              </span>
            </div>
          </div>

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
                ساخت حساب کاربری
              </h1>
              <p className="text-gray-500 text-sm mb-8 text-center">
                برای شروع خرید، اطلاعات زیر را تکمیل کن
              </p>

              <form className="space-y-5">
                {/* فیلد نام و نام خانوادگی */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نام و نام خانوادگی
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <FiUser className="w-5 h-5" />
                    </span>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      placeholder="مثال: علی محمدی"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
                    />
                  </div>
                </div>

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
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d*$/.test(val)) {
                          setPhone(val);
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
                      placeholder="حداقل ۸ کاراکتر، یک حرف بزرگ و @"
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

                {/* پذیرش قوانین */}
                <div className="flex items-center text-sm">
                  <label className="flex items-center gap-2 cursor-pointer select-none text-gray-600">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={() => setAgree(!agree)}
                      className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                    />
                    <span>
                      <span className="text-violet-600 font-medium hover:text-violet-800 transition">
                        قوانین و مقررات
                      </span>{" "}
                      نوین‌استور را می‌پذیرم
                    </span>
                  </label>
                </div>

                {/* دکمه ساخت حساب */}
                <button
                  type="button"
                  onClick={handleSignup}
                  className="w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-semibold py-3.5 rounded-xl transition shadow-md shadow-violet-200 cursor-pointer"
                >
                  ساخت حساب کاربری
                </button>

                {/* خط جداکننده */}
                <div className="flex items-center gap-3 py-2">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-xs text-gray-400">یا ثبت‌نام با</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* دکمه‌های گوگل و اپل */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <FcGoogle className="w-4.5 h-4.5" size={18} />
                    گوگل
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <FaApple className="w-4.5 h-4.5 text-gray-900" size={18} />
                    اپل
                  </button>
                </div>
              </form>

              {/* لینک ورود */}
              <p className="text-center text-sm text-gray-500 mt-4">
                قبلاً حساب کاربری ساختی؟{" "}
                <Link
                  to="/login"
                  className="text-violet-600 font-semibold hover:text-violet-800 transition"
                >
                  وارد شو
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
