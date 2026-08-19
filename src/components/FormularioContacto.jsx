// src/components/FormularioContacto.jsx
import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  // Estado único del formulario
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  // Actualizar por nombre de campo
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Actualizar por nombre de campo
  const onSubmit = (e) => {
    e.preventDefault(); //evitar recargar
    if (!form.nombre.trim() || !form.telefono.trim()) {
      alert("Completa al menos Nombre y Teléfono");
      return;
    }
    onAgregar(form); //App agrega id y actualiza la lista
    setForm({ nombre: "", correo: "", telefono: "", etiqueta: "" }); //limpiar
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Nombre + Teléfono (grid responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre *
          </label>
          <input
            name="nombre"
            placeholder="Ej:Ana López"
            value={form.nombre}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Teléfono *
          </label>
          <input
            name="telefono"
            placeholder="300 123 4567"
            value={form.telefono}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo *
          </label>
          <input
            name="correo"
            placeholder="Ej: ana@sena.edu.co"
            value={form.correo}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Etiqueta (opcional)
          </label>
          <input
            name="etiqueta"
            placeholder="Ej: Trabajo"
            value={form.etiqueta}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none p-3"
          />
        </div>
      </div>
      {/* Botón principal morado */}
      <button className="w-full bg-purple-600 hover:bg-purple-700 textwhite font-semibold py-3 rounded-lg transition-colors">
        Agregar contacto
      </button>
    </form>
  );
}
