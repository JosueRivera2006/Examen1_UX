export default function BarraNavegacion() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{background:"linear-gradient(to bottom, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0))"}}>
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand me-5 fs-4" href="#">
          <img src="/netflix-text.png" style={{ width: "100px" }} alt="Netflix" />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link text-white" href="#">Inicio</a>
            <a className="nav-link text-white" href="#series">Series</a>
            <a className="nav-link text-white" href="#peliculas">Películas</a>
            <a className="nav-link text-white" href="#novedades">Novedades populares</a>
            <a className="nav-link text-white" href="#lista">Mi lista</a>
            <a className="nav-link text-white" href="#idiomas">Explora por idiomas</a>
          </div>
        </div>
        
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img src="/Lupa-01.png" style={{ width: "40px"}} alt="Buscar" />
          </a>
          <a className="nav-link text-white" href="#">Niños</a>
          <a className="navbar-brand" href="#">
            <img src="/notificaciones.png" style={{ width: "40px"}} alt="Notificaciones" />
          </a>
          <a className="navbar-brand" href="#">
            <img src="/perfil.png" style={{ width: "40px", borderRadius: "10px"}} alt="Perfil" />
          </a>
        </div>
      </div>
    </nav>
  );
}