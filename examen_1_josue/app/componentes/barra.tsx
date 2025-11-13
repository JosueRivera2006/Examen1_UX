export default function BarraNavegacion() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" style={{background:"linear-gradient(180deg, rgba(0, 0, 0, .7) 10%, transparent)", alignItems:"center", padding:"0.4%", width:"50%"}}>
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand me-5 fs-4" href="#">
            <img src="/netflix-text.png" style={{ width: "9vw" }} alt="Netflix" />
          </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <a className="text-white text-decoration-none" style={{fontSize:"3vw", marginLeft:"0%"}}>Explorar⏷</a>
          </button>
          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" style={{color:"#E5E5E5"}} href="#">Inicio</a>
              <a className="nav-link" style={{color:"#E5E5E5"}} href="#series">Series</a>
              <a className="nav-link" style={{color:"#E5E5E5"}} href="#peliculas">Películas</a>
              <a className="nav-link" style={{color:"#E5E5E5"}} href="#novedades">Novedades populares</a>
              <a className="nav-link" style={{color:"#E5E5E5"}} href="#lista">Mi lista</a>
              <a className="nav-link" style={{color:"#E5E5E5"}} href="#idiomas">Explora por idiomas</a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg fixed-top" style={{justifyContent:"end", marginLeft:"15%"}}>
        <div className="d-flex align-items-center" style={{marginRight:"3%"}}>
            <a className="navbar-brand" href="#">
              <img src="/Lupa-01.png" style={{ width: "30px", marginRight:"1vw"}} alt="Buscar" />
            </a>
            <a className="nav-link text-white" href="#" style={{marginRight:"1vw"}}>Niños</a>
            <a className="navbar-brand" href="#">
              <img src="/notificaciones.png" style={{ width: "30px", marginRight:"1vw"}} alt="Notificaciones" />
            </a>
            <a className="navbar-brand" href="#">
              <img src="/perfil.png" style={{ width: "30px", borderRadius: "5px"}} alt="Perfil"/>
            </a>
            <a className="text-white text-decoration-none">
              ⏷
            </a>
          </div>
      </nav>
    </div>
  );
}