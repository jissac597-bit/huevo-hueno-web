import { Leaf, Dumbbell, Truck } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Frescos",
    description:
      "Nuestros huevos pasan de la granja a tu puerta en menos de 24 horas. Frescura garantizada.",
  },
  {
    icon: Dumbbell,
    title: "Altos en Proteína",
    description:
      "Cada huevo está cargado de proteínas de alta calidad y nutrientes esenciales para tu bienestar.",
  },
  {
    icon: Truck,
    title: "Directo de la Granja",
    description:
      "Sin intermediarios. Recibes el producto directamente del productor, con el mejor precio.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-brown-900 mb-4">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-center text-brown-700 mb-12 max-w-2xl mx-auto">
          En Huevo Hueno nos dedicamos a ofrecer los mejores huevos del campo,
          con sabor auténtico y la calidad que tu familia merece.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center rounded-xl border border-egg-200 bg-egg-50 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-egg-200 mb-5">
                <b.icon className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                {b.title}
              </h3>
              <p className="text-brown-700 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
