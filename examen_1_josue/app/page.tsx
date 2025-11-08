import Image from "next/image";
import Parte_carrusel from "./componentes/moleculas/contenido_carrusel";

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{backgroundColor:'transparent'}}>
        <div className="container-fluid">
          <a className="navbar-brand me-5 fs-4" href="#">
            <img src="/netflix-text.png" style={{width:'100px'}}/>
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Inicio
              </a>
              <a className="nav-link" href="#">
                Series
              </a>
              <a className="nav-link" href="#">
                Películas
              </a>
              <a className="nav-link" href="#">
                Novedades populares
              </a>
              <a className="nav-link" href="#">
                Mi lista
              </a>
              <a className="nav-link" href="#">
                Explora por idiomas
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
                aria-label="Slide 7"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://www.hola.com/horizon/landscape/f0951cc4adb5-posterjuegonetflix.jpg"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5></h5>
                    <p></p>
                </div>
            </div>
            <Parte_carrusel direccion_imagen="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQahlEjH_3LBJyRq0T9E9zrVF4iz5ivFzxkEGZMwgJFdIsfz8dlyV0B1olxJRDMzv_Ppa9fZwwXVZTdpAr2q1wE53b40fjH6srkqgt8_eNUiCry5KFhJiPPRWWqv-pwRIlOqBZv0-S3hEuTJn1ZO_ly3qOU8.jpg?r=bce" titulo="" info=""/>
            <Parte_carrusel direccion_imagen="https://www.latercera.com/resizer/v2/PQP6LDX7UJB6RO4TLJUQCLDP6Q.jpg?auth=a3c75bd5e8aa1bc4d5c5e139450f8b4f48b4b947e657414e58825ffb50227e1d&smart=true&width=800&height=450&quality=70" titulo="" info=""/>
            <Parte_carrusel direccion_imagen="https://media.gq.com.mx/photos/66ac00abddaa40819fe0b600/16:9/w_2560%2Cc_limit/Demon_Slayer_quinta_temporada.jpg" titulo="" info=""/>
            <Parte_carrusel direccion_imagen="https://assets-prd.ignimgs.com/2022/07/13/black-mirror-1657737549651.jpeg" titulo="" info=""/>
            <Parte_carrusel direccion_imagen="https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaa2DQ-YW_kqni6mNrUk8JpN7dXDVIdwtNDCDB1L0JooaOrXRewP6TgvNFDrm909BFpi6aoFqi4lCDp0EbeaSTq_bBZt3Az-9-IBlz4Ppl72nsZuzlw4htkIHA.jpg?r=916" titulo="" info=""/>
            <Parte_carrusel direccion_imagen="https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbSgv1dDgUpXTDNz6i2tus0qkwMdlkzEV_AdhUVxxIc4EVKTyy-cxtKoSF3O2LjPhoJchs55PbxsQx1Uninvc4_dMz8PmRru0Q6q.jpg?r=7ea" titulo="" info=""/>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
    </div>



      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          To get started, edit the page.tsx file.
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Looking for a starting point or more instructions? Head over to{" "}
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            Templates
          </a>{" "}
          or the{" "}
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            Learning
          </a>{" "}
          center.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Deploy Now
        </a>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </div>
    </div>
  );
}
