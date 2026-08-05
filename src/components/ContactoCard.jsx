export default function ContactoCard({ nombre, telefono, correo, etiqueta }) {
  return (
    <div className="card-contacto">
      {/*Nombre del contacto en negrita*/}
      <h3 className="card-nombre">{nombre}</h3>

      {/*Teléfono*/}
      <p clasName="card-linea">📞 {telefono}</p>

      {/*Correo*/}
      <p className="card-correo">📧 {correo}</p>

      {/*Etiqueta adicional, si existe (por ejemplo: "Instructor", "Cliente", "Compañera")*/}
      {etiqueta && <p className="card-etiqueta">{etiqueta}</p>}
    </div>
  );
}
