import { useState, useEffect } from "react";
import ContactoCard from "./components/ContactoCard";
import FormularioContacto from "./components/FormularioContacto";

// Nota: toda la lógica de contactos (agregar/eliminar/persistir) se mantiene.
export default function App() {
  // 1) Cargar lo guardado en localStorage (o array vacío)
  const contactosGuardados =
    JSON.parse(localStorage.getItem("contactos")) || [];

  // 2) Estado con la lista de contactos
  const [contactos, setContactos] = useState(contactosGuardados);

  // 3) Persistir cambios en localStorage
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  // 4) Agregar contacto (siempre inmutable)
  const agregarContacto = (nuevo) => setContactos((prev) => [...prev, nuevo]);

  // 5) Eliminar usando correo como clave única
  const eliminarContacto = (correo) =>
    setContactos((prev) => prev.filter((c) => c.correo !== correo));

  return (
    <main className="min-h-screen py-10 px-4">
      {/* Título centrado con color morado */}
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
        Agenda ADSO v3📒
      </h1>

       <p className="text-l font-bold text-center text-black-100 mb-8">Persistencia con localStorage + UI moderna + Estilos con TailwindCSS</p>

      <div className="max-w-4xl mx-auto">
        {/* Tarjeta del formulario */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
          <FormularioContacto onAgregar={agregarContacto} />
        </section>
        <section className="space-y-4">
          {/* Recorremos el arreglo contactos y pintamos una tarjeta por cada uno */}
          {contactos.map((c) => (
            <ContactoCard
              key={c.correo} // key única para React
              // id={c.id} //id asignado a cada registro
              nombre={c.nombre} // prop nombre
              telefono={c.telefono} // prop telefono
              correo={c.correo} // prop correo
              etiqueta={c.etiqueta} // prop etiqueta (Cliente, Instructor, etc.)
              onDelete={eliminarContacto} //prop que da la opción para eliminar registro
            />
          ))}
        </section>
      </div>
    </main>
  );
}
