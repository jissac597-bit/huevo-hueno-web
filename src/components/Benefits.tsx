import { Beef, Sun, Droplets, Heart } from "lucide-react";

const benefits = [
  {
    icon: Beef,
    title: "Proteína de alta calidad",
    description:
      "Cada huevo contiene proteínas completas con todos los aminoácidos esenciales para tu cuerpo.",
    accent: "from-orange-500 to-rose-500",
    bg: "bg-orange-50",
  },
  {
    icon: Sun,
    title: "Vitaminas y antioxidantes",
    description:
      "Ricos en vitaminas A, D, E y B12. Un refuerzo natural para tu sistema inmunológico.",
    accent: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: Droplets,
    title: "Perfil de grasas saludable",
    description:
      "Mayor contenido de Omega-3 gracias a la alimentación natural y libre de nuestras gallinas.",
    accent: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Heart,
    title: "Bienestar animal",
    description:
      "Gallinas Rhode Island criadas en libertad, sin estrés, con alimentación 100% natural.",
    accent: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Beneficios
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nutrición que se nota
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base md:text-lg font-medium text-slate-500">
            No todos los huevos son iguales. Los nuestros marcan la diferencia
            en cada bocado.
          </p>
        </div>

        {/* Widget grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative rounded-3xl bg-white p-7 shadow-sm shadow-slate-200/50 ring-1 ring-slate-100 hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${b.bg} mb-5`}
              >
                <b.icon
                  className={`h-6 w-6 bg-gradient-to-br ${b.accent} bg-clip-text`}
                  style={{ color: "var(--tw-gradient-from)" }}
                />
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">
                {b.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                {b.description}
              </p>

              {/* Hover accent bar */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${b.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
