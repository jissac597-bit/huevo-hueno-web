"use client";

import { useState, type FormEvent } from "react";
import { getSupabase } from "@/lib/supabase";
import { Loader2, CheckCircle, AlertTriangle, Send } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function OrderForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [producto, setProducto] = useState("Caja de 360 huevos");
  const [cantidad, setCantidad] = useState(1);
  const [direccion, setDireccion] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const { error } = await getSupabase().from("pedidos").insert([
      {
        nombre,
        telefono,
        producto,
        cantidad,
        direccion,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      setErrorMsg(error.message);
      setStatus("error");
    } else {
      setStatus("success");
      setNombre("");
      setTelefono("");
      setProducto("Caja de 360 huevos");
      setCantidad(1);
      setDireccion("");
    }
  }

  return (
    <section id="pedidos" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-lg">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Pedidos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Haz tu pedido
          </h2>
          <p className="mt-3 text-base font-medium text-slate-500">
            Llena el formulario y te contactaremos para confirmar.
          </p>
        </div>

        {/* Success message */}
        {status === "success" && (
          <div className="mb-8 flex items-start gap-3 rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
            <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-emerald-900">
                ¡Pedido enviado con éxito!
              </p>
              <p className="text-sm text-emerald-700 mt-1">
                Nos pondremos en contacto contigo pronto. 🎉
              </p>
            </div>
          </div>
        )}

        {/* Error message */}
        {status === "error" && (
          <div className="mb-8 flex items-start gap-3 rounded-2xl bg-red-50 p-5 ring-1 ring-red-100">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-red-900">
                Error al enviar el pedido
              </p>
              <p className="text-sm text-red-700 mt-1">
                {errorMsg || "Algo salió mal. Inténtalo de nuevo."}
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl bg-white p-7 sm:p-9 shadow-xl shadow-slate-200/40 ring-1 ring-slate-100"
        >
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-semibold text-slate-900 mb-2"
            >
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez"
              className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-200"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-semibold text-slate-900 mb-2"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              required
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ej: 33 1234 5678"
              className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-200"
            />
          </div>

          {/* Producto */}
          <div>
            <label
              htmlFor="producto"
              className="block text-sm font-semibold text-slate-900 mb-2"
            >
              Producto
            </label>
            <select
              id="producto"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-200 appearance-none"
            >
              <option>Caja de 360 huevos</option>
            </select>
          </div>

          {/* Cantidad */}
          <div>
            <label
              htmlFor="cantidad"
              className="block text-sm font-semibold text-slate-900 mb-2"
            >
              Cantidad de cajas
            </label>
            <input
              id="cantidad"
              type="number"
              min={1}
              required
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
              className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-200"
            />
          </div>

          {/* Dirección */}
          <div>
            <label
              htmlFor="direccion"
              className="block text-sm font-semibold text-slate-900 mb-2"
            >
              Dirección de entrega
            </label>
            <textarea
              id="direccion"
              required
              rows={3}
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Ej: Av. Vallarta #1234, Col. Americana"
              className="w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:from-orange-600 hover:to-amber-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar pedido
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
