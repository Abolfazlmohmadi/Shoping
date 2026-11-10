import { useState } from "react";
import {
  Home,
  LayoutGrid,
  ShoppingCart,
  Heart,
  User,
  X,
  ChevronDown,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Tv,
  Gamepad2,
  Camera,
  Cable,
  Monitor,
  Printer,
  Car,
  Shirt,
  Refrigerator,
  Sofa,
  Dumbbell,
  BookOpen,
  BatteryCharging,
  Mouse,
} from "lucide-react";

import { Link } from "react-router";

import categories from "../../../../../Data/MegaMune";

const navItems = [
  { key: "home", label: "خانه", icon: Home, id: 1, to: "/login" },
  {
    key: "categories",
    label: "دسته‌بندی",
    icon: LayoutGrid,
    id: 2,
    to: "/login",
  },
  {
    key: "cart",
    label: "سبد خرید",
    icon: ShoppingCart,
    badge: 3,
    id: 3,
    to: "/login",
  },
  { key: "favorites", label: "علاقه‌مندی", icon: Heart, id: 4, to: "/login" },
  { key: "account", label: "حساب من", icon: User, id: 5, to: "/login" },
];

export default function BottomNavigationDemo() {
  const [activeTab, setActiveTab] = useState("home");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const handleNavClick = (item) => {
    if (item.key === "categories") {
      setIsSheetOpen(true);
      setActiveTab(item.key);
      return;
    }
    setActiveTab(item.key);
  };

  const toggleCategory = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div dir="rtl" className="font-sans">
      {/* نوار ناوبری پایین */}
      <nav className=" fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-100 shadow-[0_-4px_20px_-6px_rgba(0,0,0,0.12)]">
        <div className="max-w-md mx-auto grid grid-cols-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key;
            return (
              <Link
                to={item.to}
                key={item.key}
                onClick={() => handleNavClick(item)}
                className="relative flex flex-col items-center justify-center gap-1 py-2.5 active:scale-95 transition-transform"
              >
                {isActive && (
                  <span className="absolute top-0 w-8 h-0.75 bg-violet-600 rounded-full" />
                )}
                <span className="relative">
                  <Icon
                    className={`w-6 h-6 transition-colors ${
                      isActive ? "text-violet-600" : "text-gray-400"
                    }`}
                    strokeWidth={isActive ? 2.4 : 2}
                  />
                  {item.badge ? (
                    <span className="absolute -top-1.5 -left-2 min-w-4 h-4 px-1 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center">
                      {item.badge}
                    </span>
                  ) : null}
                </span>
                <span
                  className={`text-[11px] transition-colors ${
                    isActive ? "text-violet-600 font-medium" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* کشوی دسته‌بندی (Bottom Sheet) */}
      {isSheetOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 md:hidden"
          onClick={() => setIsSheetOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-t-3xl max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-3 pb-2 flex justify-center">
              <span className="w-10 h-1 bg-gray-200 rounded-full" />
            </div>

            <div className="px-4 pb-3 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-base font-bold text-gray-800">
                دسته‌بندی کالاها
              </h2>
              <button
                onClick={() => setIsSheetOpen(false)}
                className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                aria-label="بستن"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 px-2 py-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isExpanded = expandedId === cat.id;
                return (
                  <div
                    key={cat.id}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full flex items-center justify-between gap-3 px-2 py-3 rounded-xl hover:bg-violet-50 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-violet-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {cat.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="grid grid-cols-2 gap-2 px-3 pb-3">
                        {cat.children.map((child, idx) => (
                          <button
                            key={idx}
                            className="text-right text-xs text-gray-600 bg-gray-50 hover:bg-violet-50 hover:text-violet-600 rounded-lg px-3 py-2 transition truncate"
                          >
                            {child}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
