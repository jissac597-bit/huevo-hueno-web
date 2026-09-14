import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-egg-100 to-egg-50"
    >
      {/* Decorative egg emoji */}
      <span className="text-7xl sm:text-8xl mb-6 animate-bounce" role="img" aria-label="huevo">
        🥚
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brown-900 leading-tight">
        Huevo Hueno
        <br />
        <span className="text-orange-500">El Huevo Bueno</span>
      </h1>

      <p className="mt-4 max-w-xl text-lg sm:text-xl text-brown-700">
        Huevos frescos, 100% naturales y altos en proteína. Directos de la
        granja a tu mesa, con la calidad que tu familia merece.
      </p>

      <a
        href="#pedidos"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors"
      >
        Haz tu pedido
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
