"use client";

import { motion } from "framer-motion";
import { Check, Truck } from "lucide-react";

const tiers = [
  {
    range: "1 – 3 cajas",
    price: "$990",
    perUnit: "por caja",
    description: "Perfecto para familias o negocios pequeños.",
    popular: false,
  },
  {
    range: "4 – 9 cajas",
    price: "$930",
    perUnit: "por caja",
    description: "El volumen ideal. Ahorra $60 por caja.",
    popular: true,
  },
  {
    range: "10+ cajas",
    price: "$870",
    perUnit: "por caja",
    description: "Mayoreo con el mejor precio por unidad.",
    popular: false,
  },
];

const features = [
  "360 huevos por caja (aprox. 24 kg)",
  "Gallinas Rhode Island en libertad",
  "Alimentación 100% natural",
  "Sin químicos ni pesticidas",
];

// Container — stagger children cascade
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

// 3D reveal per card
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -15,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const deliveryVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6, ease: "easeOut" as const } },
};

export default function Products() {
  return (
    <section id="precios" className="py-24 md:py-32 px-6 bg-white" style={{ perspective: "1200px" }}>
      <div className="mx-auto max-w-5xl">

        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Precios
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple y transparente
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base md:text-lg font-medium text-slate-500">
            Un solo producto, tres rangos de precio. Entre más pidas, más
            ahorras.
          </p>
        </motion.div>

        {/* Stagger pricing cards */}
        <motion.div
          className="grid gap-5 sm:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.range}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: tier.popular ? 1.07 : 1.03,
                boxShadow: tier.popular
                  ? "0 32px 64px -12px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.2)"
                  : "0 20px 40px -8px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.06)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`relative flex flex-col rounded-3xl p-8 cursor-default ${
                tier.popular
                  ? "bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl shadow-slate-900/30 scale-[1.02] sm:scale-105"
                  : "bg-white text-slate-900 shadow-sm ring-1 ring-slate-100"
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/30">
                    Más popular
                  </span>
                </div>
              )}

              {/* Range */}
              <p className={`text-sm font-semibold uppercase tracking-wider mb-6 ${tier.popular ? "text-slate-400" : "text-slate-500"}`}>
                {tier.range}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-extrabold tracking-tight">{tier.price}</span>
                <span className={`text-sm font-medium ${tier.popular ? "text-slate-400" : "text-slate-500"}`}>MXN</span>
              </div>
              <p className={`text-sm font-medium mb-6 ${tier.popular ? "text-slate-400" : "text-slate-500"}`}>
                {tier.perUnit}
              </p>

              {/* Description */}
              <p className={`text-sm font-medium leading-relaxed mb-8 ${tier.popular ? "text-slate-300" : "text-slate-500"}`}>
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 mt-auto">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${tier.popular ? "text-orange-400" : "text-orange-500"}`} />
                    <span className={`text-sm font-medium ${tier.popular ? "text-slate-300" : "text-slate-600"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#pedidos"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`block text-center rounded-2xl px-6 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                  tier.popular
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Ordenar ahora
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Delivery note */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-3 rounded-2xl bg-slate-50 px-6 py-4 ring-1 ring-slate-100"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={deliveryVariants}
        >
          <Truck className="h-5 w-5 text-orange-500 shrink-0" />
          <p className="text-sm font-medium text-slate-600">
            <span className="text-slate-900 font-semibold">Entregas a domicilio</span>{" "}
            disponibles en Guadalajara y localidades cercanas (costo de envío aplica).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
