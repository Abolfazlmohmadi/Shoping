import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white mt-50 rounded-xl p-5" dir="rtl">
      <div className="container mx-auto px-4 py-12 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mb-10">
          <div>
            <h3 className="text-lg font-bold text-violet-600 mb-4">
              درباره ما
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              نوین استور: مدرن‌تر از آنچه فکر می‌کنید! با بهترین‌های تکنولوژی،
              زندگی دیجیتال خود را متحول کنید. ارسال رایگان، ضمانت بهترین قیمت و
              ۷ روز ضمانت بازگشت وجه همین حالا بخرید و از تجربه‌ی خرید هوشمندانه
              لذت ببرید!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-violet-600 mb-4">
              لینک‌های سریع
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  خدمات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-violet-600 mb-4">خدمات</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  فروش موبایل
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  فروش لپتاپ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  فروش لوازم دیجیتالی
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  فروش لوازم خانه
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-violet-600 mb-4">
              تماس با ما
            </h3>
            <p className="text-gray-600 text-sm">ایمیل: info@example.com</p>
            <p className="text-gray-600 text-sm mt-1">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <div className="flex gap-4 mt-7 max-md:justify-center ">
              <a
                href="#"
                className="text-gray-400 hover:text-violet-600 transition-colors"
                aria-label="فیسبوک"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-violet-600 transition-colors"
                aria-label="توییتر"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-violet-600 transition-colors"
                aria-label="اینستاگرام"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-violet-600 transition-colors"
                aria-label="لینکدین"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-violet-600 py-4 max-lg:mb-20 mb-5">
        <div className="container mx-auto px-4 text-center text-white text-sm">
          <p>© 1405 تمامی حقوق این وب‌سایت متعلق به شرکت ما می‌باشد.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
