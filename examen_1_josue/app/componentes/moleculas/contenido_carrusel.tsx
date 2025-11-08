interface Parametros {
  direccion_imagen: string;
  titulo: string;
  info: string;
}
export default function Parte_carrusel({
  direccion_imagen,
  titulo,
  info,
}: Parametros) {
  return (
    <div className="carousel-item">
      <img src={direccion_imagen} style={{width:'100%', height:'70%'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{titulo}</h5>
        <p>{info}</p>
      </div>
    </div>
  );
}
