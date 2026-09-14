import { Egg } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Granja", href: "#granja" },
  { label: "Precios", href: "#precios" },
  { label: "Pedidos", href: "#pedidos" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-400">
                <Egg className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Huevo Hueno
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Huevos frescos de gallinas Rhode Island criadas en libertad.
              Guadalajara, Jalisco.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
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

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Huevo Hueno. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-slate-600">
            Hecho con 🧡 en Guadalajara
          </p>
        </div>
      </div>
    </footer>
  );
}
