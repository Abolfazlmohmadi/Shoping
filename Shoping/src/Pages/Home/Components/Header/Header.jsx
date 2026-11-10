import { useContext } from "react";
import { Search, ShoppingBag, ShoppingCart, User } from "lucide-react";

import Nav from "./nav/nav";
import { Link } from "react-router";
import { FiShoppingBag } from "react-icons/fi";
import { CartContext } from "../../../../Context/CartContext";

function Header() {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 max-lg:text-center max-lg:items-center max-lg:justify-center">
        <div className="flex gap-1">
          <FiShoppingBag className="w-7 h-7 text-violet-500" />
          <span className="text-violet-700 font-extrabold text-2xl">
            نوین‌ استور
          </span>
        </div>

        <div className="flex-1 flex items-center h-11 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm focus-within:border-violet-400 focus-within:ring-1 focus-within:ring-violet-400 transition max-lg:hidden">
          <input
            type="text"
            placeholder="جستجو برای محصول، برند و ..."
            className="flex-1 min-w-0 h-full bg-transparent px-4 text-sm outline-none placeholder:text-slate-400"
          />
          <button
            aria-label="جستجو"
            className="h-full w-11 shrink-0 flex items-center justify-center bg-violet-600 hover:bg-violet-700 transition"
          >
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <button
            aria-label="سبد خرید"
            className="relative h-10 w-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition"
          >
            <Link to={"/sabad"}>
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <span className="absolute -top-1.5 -right-1.5 min-w-4.5 h-4.5 px-1 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          </button>

          <Link
            to="/login"
            className="flex items-center gap-2 h-10 px-4 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition whitespace-nowrap"
          >
            <User className="h-5 w-5" />
            <span className="text-sm font-medium">ورود / ثبت نام</span>
          </Link>
        </div>
      </div>

      <div className=" border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
