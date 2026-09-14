"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers — different speeds for each element
  const badgeY    = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const ctaY      = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const trustY    = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Shared entrance transition
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-24 sm:pt-44 sm:pb-32 md:pt-52 md:pb-40 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      {/* Badge */}
      <motion.div
        style={{ y: badgeY }}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm shadow-slate-200/50 ring-1 ring-slate-100"
      >
        <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        Gallinas Rhode Island criadas en libertad
      </motion.div>

      {/* Levitating egg emoji */}
      <motion.span
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="text-6xl mb-6 block select-none"
        role="img"
        aria-label="huevo"
      >
        🥚
      </motion.span>

      {/* Headline — fastest parallax */}
      <motion.h1
        style={{ y: headlineY }}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
      >
        Calidad que se{" "}
        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
          Siente.
        </span>
        <br />
        Sabor que se{" "}
        <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
          Nota.
        </span>
      </motion.h1>

      {/* Subtitle — medium parallax */}
      <motion.p
        style={{ y: subtitleY }}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-medium text-slate-500 leading-relaxed"
      >
        Huevos de gallinas Rhode Island criadas en libertad, alimentadas
        naturalmente sin químicos ni pesticidas. De nuestra granja a tu mesa.
      </motion.p>

      {/* CTAs — slow parallax */}
      <motion.div
        style={{ y: ctaY }}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <motion.a
          href="#pedidos"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40"
        >
          Hacer un pedido
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </motion.a>

        <motion.a
          href="#beneficios"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:ring-slate-300 hover:shadow-md"
        >
          Conocer más
        </motion.a>
      </motion.div>

      {/* Trust line — slowest parallax */}
      <motion.p
        style={{ y: trustY }}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-16 text-xs font-medium uppercase tracking-widest text-slate-400"
      >
        Desde Guadalajara, Jalisco — con amor y respeto por cada gallina 🐔
      </motion.p>
    </section>
  );
}
