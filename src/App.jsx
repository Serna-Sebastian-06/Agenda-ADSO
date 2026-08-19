import { useState, useEffect } from "react";
import "./App.css";
import ContactoCard from "./components/ContactoCard";
import FormularioContacto from "./components/FormularioContacto";

export default function App() {
  const contactosGuardados =
    JSON.parse(localStorage.getItem("contactos")) || [];

  const [contactos, setContactos] = useState(contactosGuardados);


  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);


  // Agregar
  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev, nuevo ]);
  };

  // Eliminar
  const eliminarContacto = (correo) => {
    setContactos((prev) => prev.filter((c) => c.correo !== correo));
  };

  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO v3📒</h1>
            <p className="subtitulo">
        Persistencia con localStorage + UI moderna
      </p>


      <FormularioContacto onAgregar={agregarContacto}/>

      <section className="lista-contactos">
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
    </main>
  );
}
