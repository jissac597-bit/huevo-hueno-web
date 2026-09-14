"use client";

import { motion } from "framer-motion";
import { Egg } from "lucide-react";

// Inline SVGs — lucide-react v1.x doesn't ship Instagram/Facebook icons
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Granja", href: "#granja" },
  { label: "Precios", href: "#precios" },
  { label: "Pedidos", href: "#pedidos" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hueno.huevo?stkn=MTY1ZHQ3bjNudzEycQ==",
    icon: IconInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DpLfAECME/",
    icon: IconFacebook,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-400">
                <Egg className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">Huevo Hueno</span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Huevos frescos de gallinas Rhode Island criadas en libertad.
              Guadalajara, Jalisco.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -3, color: "#f97316" }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors duration-200"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Huevo Hueno. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-600">Hecho con 🧡 en Guadalajara</p>
        </div>
      </div>
    </footer>
  );
}
