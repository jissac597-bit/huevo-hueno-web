"use client";

import { motion } from "framer-motion";
import { Beef, Sun, Droplets, Heart } from "lucide-react";

const benefits = [
  {
    icon: Beef,
    title: "Proteína de alta calidad",
    description:
      "Cada huevo contiene proteínas completas con todos los aminoácidos esenciales para tu cuerpo.",
    accent: "from-orange-500 to-rose-500",
    bg: "bg-orange-50",
    iconColor: "#f97316",
  },
  {
    icon: Sun,
    title: "Vitaminas y antioxidantes",
    description:
      "Ricos en vitaminas A, D, E y B12. Un refuerzo natural para tu sistema inmunológico.",
    accent: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "#f59e0b",
  },
  {
    icon: Droplets,
    title: "Perfil de grasas saludable",
    description:
      "Mayor contenido de Omega-3 gracias a la alimentación natural y libre de nuestras gallinas.",
    accent: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "#10b981",
  },
  {
    icon: Heart,
    title: "Bienestar animal",
    description:
      "Gallinas Rhode Island criadas en libertad, sin estrés, con alimentación 100% natural.",
    accent: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    iconColor: "#f43f5e",
  },
];

// Container with stagger
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// 3D scroll-reveal per card
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

// Section header fade-up
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 md:py-32 px-6" style={{ perspective: "1200px" }}>
      <div className="mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
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
        </motion.div>

        {/* Stagger grid */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow:
                  "0 20px 40px -8px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.06)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group relative flex flex-col rounded-3xl bg-white p-7 shadow-sm shadow-slate-200/50 ring-1 ring-slate-100 cursor-default`}
            >
              {/* Icon */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${b.bg} mb-5`}>
                <b.icon className="h-6 w-6" style={{ color: b.iconColor }} />
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">{b.description}</p>

              {/* Hover accent bar */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${b.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
