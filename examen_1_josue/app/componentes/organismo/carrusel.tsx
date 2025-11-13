import Content from "../atomos/content";
interface catalogoUnico {
  id: string;
  enlaces: string[];
}

export default function Catalog({id, enlaces}:catalogoUnico) {
    return(
        <div id={id} className="carousel slide" style={{marginTop:"1%"}} data-bs-touch="true">
            <div className="carousel-indicators" style={{margin:"0", justifyContent: "flex-end" , marginBottom:"13%"}}>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="estiloContenido">
                    <Content enlace={enlaces[0]}/>
                    <Content enlace={enlaces[1]}/>
                    <Content enlace={enlaces[2]}/>
                    <Content enlace={enlaces[3]}/>
                    <Content enlace={enlaces[4]}/>
                </div>
            </div>
            <div className="carousel-item">
                <div className="estiloContenido">
                    <Content enlace={enlaces[5]}/>
                    <Content enlace={enlaces[6]}/>
                    <Content enlace={enlaces[7]}/>
                    <Content enlace={enlaces[8]}/>
                    <Content enlace={enlaces[9]}/>
                </div>
            </div>
            <div className="carousel-item">
                <div className="estiloContenido">
                    <Content enlace={enlaces[10]}/>
                    <Content enlace={enlaces[11]}/>
                    <Content enlace={enlaces[12]}/>
                    <Content enlace={enlaces[13]}/>
                    <Content enlace={enlaces[14]}/>
                </div>
            </div>
            <div className="carousel-item">
                <div className="estiloContenido">
                    <Content enlace={enlaces[15]}/>
                    <Content enlace={enlaces[16]}/>
                    <Content enlace={enlaces[17]}/>
                    <Content enlace={enlaces[18]}/>
                    <Content enlace={enlaces[19]}/>
                </div>
            </div>
            <div className="carousel-item">
                <div className="estiloContenido">
                    <Content enlace={enlaces[20]}/>
                    <Content enlace={enlaces[21]}/>
                    <Content enlace={enlaces[22]}/>
                    <Content enlace={enlaces[23]}/>
                    <Content enlace={enlaces[24]}/>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev" style={{width:"3%"}}>
            <span className="carousel-control-prev-icon" style={{marginLeft:"-125%", height:"20%"}} aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next" style={{width:"5%"}}>
            <span className="carousel-control-next-icon" style={{marginRight:"0%", height:"20%"}} aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
        </div>
    );
}