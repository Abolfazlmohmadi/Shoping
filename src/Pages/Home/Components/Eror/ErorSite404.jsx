import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div
      dir="rtl"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gray-50 px-4 sm:px-6 lg:px-8"
    >
      {/* افکت‌های محو پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        {/* عدد 404 */}
        <h1 className="bg-gradient-to-b from-violet-600 to-violet-400 bg-clip-text text-8xl font-black leading-none text-transparent sm:text-9xl lg:text-[12rem]">
          404
        </h1>

        {/* عنوان */}
        <h2 className="mt-6 text-2xl font-bold text-violet-700 sm:text-3xl">
          صفحه مورد نظر پیدا نشد!
        </h2>

        {/* توضیحات */}
        <p className="mt-4 max-w-md text-base leading-7 text-gray-500 sm:text-lg">
          متأسفانه صفحه‌ای که دنبالش بودید وجود ندارد یا آدرس آن تغییر کرده است.
          می‌توانید به صفحه اصلی برگردید یا مسیر دیگری را امتحان کنید.
        </p>

        {/* دکمه‌ها */}
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/"
            className="w-full rounded-xl bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 sm:w-auto"
          >
            بازگشت به صفحه اصلی
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full rounded-xl border-2 border-violet-500 px-6 py-3 text-base font-semibold text-violet-700 transition-all duration-300 hover:bg-violet-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-violet-500/30 sm:w-auto"
          >
            بازگشت به صفحه قبل
          </button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
