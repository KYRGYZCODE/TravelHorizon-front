"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [anim, setAnim] = useState(false);
  const noop = (e?: React.MouseEvent) => e?.preventDefault();

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setAnim(true), 10);
      return () => clearTimeout(t);
    } else {
      setAnim(false);
    }
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" onClick={noop} className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="Travel Horizon" className="h-13 w-auto" />
            <span className="sr-only">Travel Horizon</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-800">
            <a href="#" onClick={noop} className="hover:opacity-70 cursor-pointer">tours</a>
            <a href="#" onClick={noop} className="hover:opacity-70 cursor-pointer">about us</a>
            <a href="#" onClick={noop} className="hover:opacity-70 cursor-pointer">contacts us</a>

            <div className="mx-1 h-4 w-px bg-gray-300" />

            <button aria-label="favorites" onClick={noop} className="hover:opacity-70 cursor-pointer">
              <img src="/icons/heart-dark.svg" alt="" className="h-4 w-4" />
            </button>
            <button aria-label="cart" onClick={noop} className="hover:opacity-70 cursor-pointer">
              <img src="/icons/cart-dark.svg" alt="" className="h-4 w-4" />
            </button>
            <button aria-label="language" onClick={noop} className="hover:opacity-80 cursor-pointer">
              <img src="/flags/ru.png" alt="ru" className="h-4 w-6 rounded-sm object-cover" />
            </button>
          </nav>

          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center"
              aria-label="open menu"
            >
              <img src="/icons/burger-dark.svg" alt="" className="h-6 w-6" />
            </button>
          )}
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${anim ? "opacity-100" : "opacity-0"}`}
            onClick={() => setOpen(false)}
          />

          <button
            onClick={() => setOpen(false)}
            aria-label="close"
            className={`absolute right-4 z-10 top-4 text-white transition-opacity duration-300 ${anim ? "opacity-100" : "opacity-0"}`}
          >
            <img src="/icons/close.svg" className="h-6 w-6" alt="" />
          </button>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`flex flex-col items-center gap-6 text-white text-xl transition-all duration-300
              ${anim ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-[0.98]"}`}
            >
              <a href="#" onClick={noop} className="cursor-pointer hover:opacity-80">tours</a>
              <a href="#" onClick={noop} className="cursor-pointer hover:opacity-80">about us</a>
              <a href="#" onClick={noop} className="cursor-pointer hover:opacity-80">contacts us</a>

              <div className="flex items-center gap-5 pt-2">
                <button aria-label="favorites" onClick={noop}><img src="/icons/heart.svg" className="h-5 w-5" alt="" /></button>
                <button aria-label="cart" onClick={noop}><img src="/icons/cart.svg" className="h-5 w-5" alt="" /></button>
                <button aria-label="language" onClick={noop}><img src="/flags/ru.png" className="h-4 w-6 rounded-sm" alt="ru" /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
