"use client";

import React, { useState } from "react";
import { ChevronLeft, Menu } from "lucide-react";

import categories from "../../../../../Data/MegaMune";
import NavRes from "../nav/NavRes";

const links = [
  { label: "خانه", href: "/" },
  { label: "فروشگاه", href: "/shop" },
  { label: "تخفیف ها", href: "/discounts" },
  { label: "برند ها", href: "/brands" },
  { label: "وبلاگ", href: "/blog" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

function Nav() {
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const activeCategory =
    categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <>
      <div className="max-lg:hidden">
        <ul className="flex gap-10 items-center list-none relative text-[#1f1b2e] mt-6 mb-3">
          {/* دسته‌بندی‌ها */}
          <li className="group relative list-none">
            <button
              type="button"
              className="flex items-center gap-2 rounded-[11px] bg-linear-to-l from-[#8B5ACB] to-[#7245b0] py-2.5 px-6 text-white font-medium shadow-md shadow-[#8B5ACB]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5ACB]/35 hover:brightness-105"
            >
              <Menu className="w-4.5 h-4.5" />
              دسته بندی کالا ها
            </button>

            <div
              className="absolute top-full right-0 pt-3 z-20 opacity-0 invisible translate-y-2
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                         transition-all duration-300 ease-out"
            >
              <div className="flex w-180 rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl shadow-black/10 ring-1 ring-black/5 overflow-hidden">
                <div className="w-56 shrink-0 border-l border-black/5 py-2">
                  {categories.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.id === activeCategory.id;
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setActiveId(item.id)}
                        onClick={() => setActiveId(item.id)}
                        className={`flex items-center justify-between gap-2 py-3 px-4 cursor-pointer transition-colors duration-200
                          ${isActive ? "bg-[#8B5ACB]/10 text-[#8B5ACB]" : "text-[#1f1b2e] hover:bg-[#8B5ACB]/5"}`}
                      >
                        <a
                          href={item.href || "#"}
                          className="flex items-center gap-2.5 text-sm font-medium"
                        >
                          <span
                            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200
                              ${isActive ? "bg-[#8B5ACB] text-white" : "bg-[#8B5ACB]/10 text-[#8B5ACB]"}`}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          {item.title}
                        </a>
                        <ChevronLeft
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isActive
                              ? "-translate-x-1 text-[#8B5ACB]"
                              : "text-[#8B5ACB]/40"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* ستون چپ: محتوای دسته‌ی فعال */}
                <div className="flex-1 p-5">
                  <p className="text-sm font-semibold text-[#8B5ACB] mb-3">
                    {activeCategory.title}
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {activeCategory.children?.map((child, index) => (
                      <a
                        key={index}
                        href={child.href || "#"}
                        className="py-1.5 text-sm text-[#1f1b2e]/80 transition-colors duration-200 hover:text-[#8B5ACB]"
                      >
                        {child.label || child}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* لینک‌های اصلی */}
          {links.map((link) => (
            <li key={link.href} className="list-none">
              <a
                href={link.href}
                className="relative text-[15px] font-medium text-[#1f1b2e]/80 transition-colors duration-200 hover:text-[#8B5ACB]
                           after:content-[''] after:absolute after:-bottom-1 after:right-0 after:h-0.5 after:w-0
                           after:bg-[#8B5ACB] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden max-lg:block">
        <NavRes />
      </div>
    </>
  );
}

export default Nav;
