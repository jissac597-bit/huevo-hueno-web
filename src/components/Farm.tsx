import { MapPin, TreePine, Heart } from "lucide-react";

export default function Farm() {
  return (
    <section id="granja" className="py-24 md:py-32 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
              Nuestra Granja
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Criadas con amor,
              <br />
              cerca de ti
            </h2>
            <p className="mt-5 text-base md:text-lg font-medium text-slate-500 leading-relaxed">
              Ubicados cerca del Parque Montenegro en Guadalajara, Jalisco,
              nuestra granja es un espacio donde las gallinas Rhode Island viven
              en libertad, respiran aire fresco y se alimentan de forma 100%
              natural — sin químicos, sin pesticidas, sin atajos.
            </p>
            <p className="mt-4 text-base md:text-lg font-medium text-slate-500 leading-relaxed">
              Cada huevo que llega a tu mesa es el resultado de un proceso
              cuidadoso donde el bienestar animal no es opcional, es el
              estándar.
            </p>

            {/* Info pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-100">
                <MapPin className="h-4 w-4 text-orange-500" />
                Guadalajara, Jalisco
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-100">
                <TreePine className="h-4 w-4 text-emerald-500" />
                Gallinas en libertad
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-100">
                <Heart className="h-4 w-4 text-rose-500" />
                Sin químicos
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 p-10 md:p-14 shadow-sm ring-1 ring-slate-100">
              <div className="text-center">
                <span className="text-7xl md:text-8xl block mb-6">🌿</span>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                  Parque Montenegro
                </p>
                <p className="text-base font-medium text-slate-500 max-w-sm mx-auto">
                  Un entorno natural privilegiado donde nuestras gallinas
                  disfrutan de espacio abierto y alimentación de primera.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100">
                  <span className="flex h-2 w-2 rounded-full bg-green-400" />
                  Guadalajara, Jalisco, México
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-3xl bg-amber-500/10 blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
