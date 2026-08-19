import { useState } from "react";

export default function FormularioContacto({onAgregar}) {
    const [form, setForm] = useState({
        nombre:"",
        correo:"",
        telefono:"",
        etiqueta:"",
    });

    const onChange = (e) => {
        const {name, value} = e.target;
        setForm((f) => ({...f, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault(); //evitar recargar
        if (!form.nombre.trim() || !form.telefono.trim()) {
            alert("Completa al menos Nombre y Teléfono");
            return;
        }
        onAgregar(form); //App agrega id y actualiza la lista
        setForm({nombre:"", correo:"", telefono:"", etiqueta:""}); //limpiar
    };

    return (
        <form onSubmit={onSubmit} className="form-contacto">

        <label>Nombre *</label>
        <input
        name="nombre"
        placeholder="Ej:Ana López"
        value={form.nombre}
        onChange={onChange}
        />

        <label>Teléfono *</label>
        <input
        name="telefono"
        placeholder="300 123 4567"
        value={form.telefono}
        onChange={onChange}
        />

         <label>Correo *</label>
        <input
        name="correo"
        placeholder="Ej: ana@sena.edu.co"
        value={form.correo}
        onChange={onChange}
      />

      <label>Etiqueta (opcional)</label>
      <input
        name="etiqueta"
        placeholder="Ej: Trabajo"
        value={form.etiqueta}
        onChange={onChange}
      />
      <button className="btn-primario">Agregar contacto</button>
      </form>
        );
}