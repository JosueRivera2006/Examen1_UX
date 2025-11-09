import Image from "next/image";
import Parte_carrusel from "./componentes/moleculas/contenido_carrusel";
import BotonSimple from "./componentes/atomos/boton";
import BarraNavegacion from "./componentes/barra";
import Content from "./componentes/atomos/content";
export default function Home() {
  return (
    <div>
    <div>
      <BarraNavegacion/>
      <div className="carousel slide carousel-fade">
          <video autoPlay muted loop className="w-100">
            <source src="/squid-game-trailer.mp4" type="video/mp4" />
          </video>
          <div className="carousel-caption ">
            <div style={{textAlign:'left', width:'50%', height:'auto', marginLeft:'-15%', marginTop:'-60%'}}>
              <h5><img src="logo1.png" /></h5>
              <p style={{marginLeft:'5%', fontSize:'1.5vw'}}>Una serie surcoreana donde personas con problemas económicos participan en juegos
                infantiles mortales para ganar un gran premio en efectivo. 
                Combina drama, suspenso y crítica social.</p>
              <BotonSimple desc="Reproducir" icono="reproducir_video.png"/>
              <BotonSimple desc="Más información" icono="https://cdn-icons-png.flaticon.com/512/0/472.png"/>

            </div>
          </div>
      </div>
      {/*<Content enlace="https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2021/11/Prueba-Tecnica.png"/>*/}
      <div style={{marginLeft:'4%'}}>
        <div>
           <h1 className="tituloSeccion">Favoritos del público</h1>
        </div>
        <div>
           <h1 className="tituloSeccion">Las 10 series más populares en Honduras hoy</h1>
        </div>
        <div id="series">
           <h1 className="tituloSeccion">Series</h1>
        </div>
        <div id="peliculas">
           <h1 className="tituloSeccion">Películas</h1>
        </div>
        <div id="novedades">
           <h1 className="tituloSeccion">Novedades populares</h1>
        </div>
        <div>
           <h1 className="tituloSeccion">Continuar viendo</h1>
        </div>
        <div id="lista">
           <h1 className="tituloSeccion">Mi lista</h1>
        </div>
        <div id="idiomas">
           <h1 className="tituloSeccion">Explora por idiomas</h1>
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div
          className="carousel-indicators"
          style={{ marginLeft: "70%", width: "25%" }}
        >
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="logo1.png" />
            <div className="carousel-caption d-none d-md-block">
              <div style={{width:'50%', height:'40%'}}>
              <h5><img src="logo1.png" /></h5>
              <p>Una serie surcoreana donde personas con problemas económicos participan en juegos
              infantiles mortales para ganar un gran premio en efectivo. 
              Combina drama, suspenso y crítica social.</p>
              </div>
            </div>
          </div>
          <Parte_carrusel
            direccion_imagen="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQahlEjH_3LBJyRq0T9E9zrVF4iz5ivFzxkEGZMwgJFdIsfz8dlyV0B1olxJRDMzv_Ppa9fZwwXVZTdpAr2q1wE53b40fjH6srkqgt8_eNUiCry5KFhJiPPRWWqv-pwRIlOqBZv0-S3hEuTJn1ZO_ly3qOU8.jpg?r=bce"
            titulo=""
            info="Continuación de la saga Karate Kid, sigue la rivalidad entre Johnny Lawrence 
            y Daniel LaRusso décadas después. Mezcla acción, humor y lecciones de vida mientras 
            entrenan a nuevas generaciones de karatekas."
          />
          <Parte_carrusel
            direccion_imagen="https://www.latercera.com/resizer/v2/PQP6LDX7UJB6RO4TLJUQCLDP6Q.jpg?auth=a3c75bd5e8aa1bc4d5c5e139450f8b4f48b4b947e657414e58825ffb50227e1d&smart=true&width=800&height=450&quality=70"
            titulo=""
            info="Miniserie sobre una joven prodigio del ajedrez que lucha contra la adicción y los 
            problemas personales mientras asciende en el mundo competitivo del ajedrez internacional."
          />
          <Parte_carrusel
            direccion_imagen="https://media.gq.com.mx/photos/66ac00abddaa40819fe0b600/16:9/w_2560%2Cc_limit/Demon_Slayer_quinta_temporada.jpg"
            titulo=""
            info="Anime que sigue a Tanjiro, un joven que lucha contra demonios después de que su familia es asesinada, 
            mientras busca una cura para su hermana Nezuko, convertida en demonio."
          />
          <Parte_carrusel
            direccion_imagen="https://assets-prd.ignimgs.com/2022/07/13/black-mirror-1657737549651.jpeg"
            titulo=""
            info="Serie de antología que explora los lados oscuros de la tecnología y la sociedad moderna. 
            Cada episodio es independiente y plantea escenarios distópicos y reflexivos sobre el futuro."
          />
          <Parte_carrusel
            direccion_imagen="https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaa2DQ-YW_kqni6mNrUk8JpN7dXDVIdwtNDCDB1L0JooaOrXRewP6TgvNFDrm909BFpi6aoFqi4lCDp0EbeaSTq_bBZt3Az-9-IBlz4Ppl72nsZuzlw4htkIHA.jpg?r=916"
            titulo=""
            info="Serie animada basada en el universo de League of Legends, que narra el origen de personajes como 
            Vi y Jinx en la ciudad de Piltover y Zaun, explorando conflictos sociales, familia y tecnología."
          />
          <Parte_carrusel
            direccion_imagen="https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbSgv1dDgUpXTDNz6i2tus0qkwMdlkzEV_AdhUVxxIc4EVKTyy-cxtKoSF3O2LjPhoJchs55PbxsQx1Uninvc4_dMz8PmRru0Q6q.jpg?r=7ea"
            titulo=""
            info="Película animada que introduce múltiples versiones de Spider-Man de distintos universos. 
            Miles Morales aprende a ser Spider-Man mientras trabaja junto a otros héroes para salvar su realidad."
          />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
    
    </div>
  );
}
