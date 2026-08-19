export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onDelete,
}) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      {/* Nombre destacado */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{nombre} </h3>

      {etiqueta && <p className="tag">{etiqueta}</p>}

      {/* Teléfono */}
      <p className="text-gray-700 mb-1">📞 {telefono}</p>
      {correo && <p>✉️ {correo}</p>}

      {/* Acciones (alineado a la izquierda en móvil) */}
      <div className="flex justify-start">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium
px-4 py-2 rounded-lg transition-colors"
          onClick={() => onDelete(correo)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}
