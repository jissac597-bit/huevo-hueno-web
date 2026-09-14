const products = [
  {
    name: "Cono de 30 huevos",
    price: "Consultar precio",
    emoji: "🥚",
    description: "El clásico cono completo. Ideal para familias y negocios.",
    unit: "30 unidades",
  },
  {
    name: "Docena de huevos",
    price: "Consultar precio",
    emoji: "🍳",
    description: "La cantidad perfecta para tu hogar. Siempre frescos.",
    unit: "12 unidades",
  },
  {
    name: "Medio cono (15 huevos)",
    price: "Consultar precio",
    emoji: "🐣",
    description: "Para quienes quieren frescura sin comprar de más.",
    unit: "15 unidades",
  },
];

export default function Products() {
  return (
    <section id="precios" className="py-20 px-4 bg-egg-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-brown-900 mb-4">
          Nuestros Productos
        </h2>
        <p className="text-center text-brown-700 mb-12 max-w-2xl mx-auto">
          Elige la presentación que mejor se adapte a tus necesidades. ¡Todos
          nuestros huevos son de la mejor calidad!
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center rounded-xl border border-egg-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="text-5xl mb-4">{p.emoji}</span>
              <h3 className="text-xl font-bold text-brown-800 mb-1">{p.name}</h3>
              <span className="text-sm text-brown-700 mb-3">{p.unit}</span>
              <p className="text-brown-700 text-center text-sm leading-relaxed mb-5">
                {p.description}
              </p>
              <span className="mt-auto inline-block rounded-lg bg-egg-200 px-4 py-2 text-sm font-semibold text-brown-800">
                {p.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
