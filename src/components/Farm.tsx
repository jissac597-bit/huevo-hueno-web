"use client";

import { motion } from "framer-motion";
import { MapPin, TreePine, Heart } from "lucide-react";

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 18, delay: i * 0.1 },
  }),
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const cardVariants = {
  hidden: { opacity: 0, x: 40, rotateY: 8 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 18, delay: 0.2 },
  },
};

const pills = [
  { icon: MapPin, color: "text-orange-500", label: "Guadalajara, Jalisco" },
  { icon: TreePine, color: "text-emerald-500", label: "Gallinas en libertad" },
  { icon: Heart, color: "text-rose-500", label: "Sin químicos" },
];

export default function Farm() {
  return (
    <section id="granja" className="py-24 md:py-32 px-6 bg-white" style={{ perspective: "1200px" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
              Nuestra Granja
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Criadas con amor,
              <br />
              cerca de ti
            </h2>
            <p className="mt-5 text-base md:text-lg font-medium text-slate-500 leading-relaxed">
              Ubicados en Guadalajara, Jalisco, nuestra granja es un espacio 
              donde las gallinas Rhode Island viven en libertad, respiran aire fresco 
              y se alimentan de forma 100% natural — sin químicos, sin pesticidas, 
              sin atajos.
            </p>
            <p className="mt-4 text-base md:text-lg font-medium text-slate-500 leading-relaxed">
              Cada huevo que llega a tu mesa es el resultado de un proceso
              cuidadoso donde el bienestar animal no es opcional, es el estándar.
            </p>

            {/* Info pills — stagger */}
            <div className="mt-8 flex flex-wrap gap-3">
              {pills.map((p, i) => (
                <motion.div
                  key={p.label}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={pillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-100 cursor-default"
                >
                  <p.icon className={`h-4 w-4 ${p.color}`} />
                  {p.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 p-10 md:p-14 shadow-sm ring-1 ring-slate-100">
              <div className="text-center">
                <motion.span
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
                  className="text-7xl md:text-8xl block mb-6 select-none"
                >
                  🌿
                </motion.span>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                  Nuestra Granja
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

            {/* Floating accents */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-3xl bg-amber-500/10 blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
