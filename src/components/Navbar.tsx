"use client";

import { useState, useEffect } from "react";
import { Egg, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Granja", href: "#granja" },
  { label: "Precios", href: "#precios" },
  { label: "Pedidos", href: "#pedidos" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-md shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow duration-300">
            <Egg className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-slate-900 tracking-tight">
            Huevo Hueno
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href="#pedidos"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
            >
              Ordenar
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-xl border-t border-slate-100 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pedidos"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block text-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md"
          >
            Ordenar ahora
          </a>
        </div>
      </div>
    </nav>
  );
}
