import Image from "next/image";
import Parte_carrusel from "./componentes/moleculas/contenido_carrusel";
import BotonSimple from "./componentes/atomos/boton";
import BarraNavegacion from "./componentes/barra";
import Content from "./componentes/atomos/content";
import Catalog from "./componentes/organismo/carrusel";
function obtenerEnlaces() {
  let todos_enlaces = [
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdxTFgwVZnsstVJpWDg9GxFzfFEUdWzudowzpN_nd8exAzMduynydFOtg5vQpa_cjX9J7CJLUXWv7SiSjGggvwcac25L_YAn2rw.webp?r=4c8",
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbvMA1k_7y8ItYnMkjgnegwQDnv_cO0JIvL4qhrfwPoo6G-vuIeQU7WK0ADPd3sq6-N-cAh8C6ZIXhZmaXoXXhVxTdd8rfDcu2r49gjVhs_kzxclJzu4sBKo9PSh4DYj7uO4mvB2Ym419WfhH52UIjnWIhxt818V4RE.webp?r=864",
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVfAe8uGcd34XCvKxyd4qJiBfgrf3oPIxLB43yELO-LIKopEOME0V6zJBRdPyzA5hKvM21zx9m0xOgk51EuJtmNm8iAZ6eIFVIxmIgtYmobUNTbf1Z1h8-UQoKCI2PjPJBWBWOst75rNTwvz452e84Y4sseQawSyp-sBCABVheESmaN8Ap7t1G4lXAkDoeXUPA-9_4rofL5_2K7bqwsEPLx3j2atVa10mAE0nQ935A.jpg?r=b1f",
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYLPxkFEgePEXtfbgd2T566zOsN_vjvQTmrHz4AgePQTy_93jwdtKBEuSa4ySU8j__Jcuq2IFCM2v-uf5SxV91rgYO8nBHqnwIrvyFNZ2r3x_fwsZhR3jWIKcsvfm2q7TJUD6-jqiDSWmqm2jiHeNLuDzEEAHdATiDIi2MtTEJNZ9Q.jpg?r=8de",
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZlSABNqh8ZOWmz3PHe0vfv1Zr7OBNHm9bQu9Ou2cyuHszgjUxi71tPAe-KPsEWNp0iacqQXjTYBUtGFxO58Zteu0s4ioOzyscM.jpg?r=846",
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWE-qBxIDOp9LFgaqxjvVfbaAXLLqzgZwiwXr0HgkwLsysda1Ucvkg4VPQ9OCD8JyZ9Kj5lJdz5FRDYIi-VTrKLvCyaKuEgY5pc.jpg?r=649",
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR6eeG3SgyXwZCeMzAyNBGMEQIS55YsXnrCFoaGMl-Bd0C3WOUhOdbOVAN-kXI5Skd8zAahcfZZut0Ma6HO1jmHJctvPAVKXMwc.jpg?r=cd3",
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABda8frnBSk0OQjKQxrjJaM0Ob1J_55QbRd9IFQZUq-zdyDx90EqbbCUoXc0eUHEv8OgyBgaruSkjtHS2uhJpckJNNChwTvTKIGI.jpg?r=210",
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVjXkAOXQkYD670HhsUGS8EDPOnGKx1dhfLurpZOZT84rcqbDQPsWbjHhzTI7JbZPfAxZd9YhJpz8lvBJxVKjQqZLderCwPqsqM.jpg?r=58c",
    "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbcWK39F0w1mtDgyB-yNgY2eISRXd0I6taP3Ykxiz-J4GRH8poJOb8CThP4zXTSsBY6c90WLnzoA5BlCCS0GH0ysL99Ph1kBBt4.jpg?r=c62"
  ];
  let random_enlaces = [];
  for (let i = 0; i < 25; i++) {
    let aleatorio = Math.floor(Math.random() * todos_enlaces.length);
    random_enlaces.push(todos_enlaces[aleatorio]);
  }
  return random_enlaces;
}
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
        <div style={{marginLeft:'4%'}}>
          <div>
            <h1 className="tituloSeccion">Favoritos del público</h1>
            <Catalog id="favoritos" enlaces={obtenerEnlaces()}/>
          </div>
          <div style={{marginTop:"5%"}}>
            <h1 className="tituloSeccion">Las series más populares en Honduras hoy</h1>
            <Catalog id="populares" enlaces={obtenerEnlaces()}/>
          </div>
          <div id="series" style={{marginTop:"5%"}}>
            <h1 className="tituloSeccion">Series</h1>
            <Catalog id="ser" enlaces={obtenerEnlaces()}/>
          </div>
          <div id="peliculas" style={{marginTop:"5%"}}>
            <h1 className="tituloSeccion">Películas</h1>
            <Catalog id="pelis" enlaces={obtenerEnlaces()}/>
          </div>
          <div id="novedades" style={{marginTop:"5%"}}>
            <h1 className="tituloSeccion">Novedades populares</h1>
            <Catalog id="novedades_pop" enlaces={obtenerEnlaces()}/>
          </div>
          <div style={{marginTop:"5%"}}>
            <h1 className="tituloSeccion">Continuar viendo</h1>
            
          </div>
          <div id="lista" style={{marginTop:"5%"}}>
            <h1 className="tituloSeccion">Mi lista</h1>
            
          </div>
          <div id="idiomas" style={{marginTop:"5%"}}>
            <h1 className="tituloSeccion">Explora por idiomas</h1>
            <Catalog id="explorando" enlaces={obtenerEnlaces()}/>
          </div>
        </div>
      </div>
    
    </div>
  );
}
