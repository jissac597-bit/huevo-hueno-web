"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { id: 1, src: "/galeria/foto1.jpg", alt: "Nuestra Granja 1" },
  { id: 2, src: "/galeria/foto2.jpg", alt: "Nuestra Granja 2" },
  { id: 3, src: "/galeria/foto3.jpg", alt: "Nuestra Granja 3" },
  { id: 4, src: "/galeria/foto4.jpg", alt: "Nuestra Granja 4" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Galería
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nuestra Granja y Producto
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-md ring-1 ring-slate-100"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
