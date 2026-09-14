"use client";

import { useState, type FormEvent } from "react";
import { getSupabase } from "@/lib/supabase";
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function OrderForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [producto, setProducto] = useState("Cono de 30 huevos");
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
      // Reset form
      setNombre("");
      setTelefono("");
      setProducto("Cono de 30 huevos");
      setCantidad(1);
      setDireccion("");
    }
  }

  return (
    <section id="pedidos" className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-brown-900 mb-4">
          Haz tu Pedido
        </h2>
        <p className="text-center text-brown-700 mb-10">
          Llena el formulario y nos pondremos en contacto contigo para confirmar
          tu pedido.
        </p>

        {/* Success message */}
        {status === "success" && (
          <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 p-4 text-green-800">
            <CheckCircle className="h-6 w-6 shrink-0" />
            <p>¡Pedido enviado con éxito! Pronto te contactaremos. 🎉</p>
          </div>
        )}

        {/* Error message */}
        {status === "error" && (
          <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-red-800">
            <AlertTriangle className="h-6 w-6 shrink-0" />
            <p>Error al enviar el pedido: {errorMsg || "Inténtalo de nuevo."}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border border-egg-200 bg-egg-50 p-6 sm:p-8 shadow-sm"
        >
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-brown-800 mb-1">
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez"
              className="w-full rounded-lg border border-egg-300 bg-white px-4 py-2.5 text-brown-800 placeholder:text-brown-700/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-brown-800 mb-1">
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              required
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ej: 3001234567"
              className="w-full rounded-lg border border-egg-300 bg-white px-4 py-2.5 text-brown-800 placeholder:text-brown-700/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Producto */}
          <div>
            <label htmlFor="producto" className="block text-sm font-medium text-brown-800 mb-1">
              Producto
            </label>
            <select
              id="producto"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              className="w-full rounded-lg border border-egg-300 bg-white px-4 py-2.5 text-brown-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option>Cono de 30 huevos</option>
              <option>Docena de huevos</option>
              <option>Medio cono (15 huevos)</option>
            </select>
          </div>

          {/* Cantidad */}
          <div>
            <label htmlFor="cantidad" className="block text-sm font-medium text-brown-800 mb-1">
              Cantidad
            </label>
            <input
              id="cantidad"
              type="number"
              min={1}
              required
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
              className="w-full rounded-lg border border-egg-300 bg-white px-4 py-2.5 text-brown-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Dirección */}
          <div>
            <label htmlFor="direccion" className="block text-sm font-medium text-brown-800 mb-1">
              Dirección de entrega
            </label>
            <textarea
              id="direccion"
              required
              rows={3}
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Ej: Calle 10 #25-30, Barrio Centro"
              className="w-full rounded-lg border border-egg-300 bg-white px-4 py-2.5 text-brown-800 placeholder:text-brown-700/50 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Pedido"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
