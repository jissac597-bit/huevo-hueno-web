import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-24 sm:pt-44 sm:pb-32 md:pt-52 md:pb-40 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm shadow-slate-200/50 ring-1 ring-slate-100">
        <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        Gallinas Rhode Island criadas en libertad
      </div>

      {/* Headline */}
      <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
        Calidad que se{" "}
        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
          Siente.
        </span>
        <br />
        Sabor que se{" "}
        <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
          Nota.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-medium text-slate-500 leading-relaxed">
        Huevos de gallinas Rhode Island criadas en libertad, alimentadas
        naturalmente sin químicos ni pesticidas. De nuestra granja a tu mesa.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#pedidos"
          className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          Hacer un pedido
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
        <a
          href="#beneficios"
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:ring-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
        >
          Conocer más
        </a>
      </div>

      {/* Trust line */}
      <p className="mt-16 text-xs font-medium uppercase tracking-widest text-slate-400">
        Desde Guadalajara, Jalisco — con amor y respeto por cada gallina 🐔
      </p>
    </section>
  );
}
