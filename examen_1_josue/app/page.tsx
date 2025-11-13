import Image from "next/image";
import BotonSimple from "./componentes/atomos/boton";
import BarraNavegacion from "./componentes/barra";
import Content from "./componentes/atomos/content";
import Catalog from "./componentes/organismo/carrusel";
import ContenidoVisto from "./componentes/moleculas/contenidoVisto";
import ContentMayor from "./componentes/moleculas/contentMayor";
function seEncuentra(lista:number[], num: number) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === num) {
      return true;
    }
  }
  return false;
}
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
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbcWK39F0w1mtDgyB-yNgY2eISRXd0I6taP3Ykxiz-J4GRH8poJOb8CThP4zXTSsBY6c90WLnzoA5BlCCS0GH0ysL99Ph1kBBt4.jpg?r=c62",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ41tfpS9j_xkFEZsFGCBEZeDxNJ8BxFjPZdC2_Gz6TnBA057gWxcSnAXNSLjNkhwlr4PRf2X_Y87TuKbOOMWRVGTUAAv8aVS5c.jpg?r=dab",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbqfwcyf5INUoqIOAhfvAtCiTkhZ9XxIhJgqEhDRoP_U0xFbxFStOO0wLQpthGW5dCmDtkwsIDILCCdNlhBAvkpspcErPnQ3fDY.jpg?r=a71",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTao7tFreXj2ncdQv8FNcg9iNHpscPIgkJAAXdAoiR7k6_rdjavQhLAioW8_lsyFVX7Lv0Kfpx6YLOSmfAXT-Iim2EcyZuwXP3fjsvQ9NFuXyAZ_y0-UyOwP0zC8rdrrFVvNwm0e_P79dIKjFJxysSQbcwejRbV33Lo.jpg?r=23f",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWikNhfSTpH2vvbXpJc4mtsPDuEaOOYtB3wl3RKEm1pehXaZC_NGcbtnQVqNIv8cjpTAlsK8kpFWxtzH5J91f0cc36DIwrCxkMA.jpg?r=726",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYq-V-iGzqUWAuGziYGIyAmfdp15xSdK2YLOmxp8m60FFXv6FxuPAI6NpZ7_0zeqaXb-J1Ow2rT82XJBad-W56bBsXzp_jYY75I.jpg?r=3e7",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdhY7yrFm_5Mk9O8TGZnJFYZber_0ENiqke3dMOMaI50rax-mA9XL4CLKXI0bTRPbsETb0_PWjD6kQeYauvoYasTbRY5gTL1TNo.jpg?r=978",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaV87jTaRr2BdHRGnDjcSTgHwzlXpyofKBMJqFlel--3UuQaKPnThmiEuq-N9Q4YsQd9Jv_cWpy0sC4cbjLpxuHZq2L9Y3BEXw8.webp?r=c98",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRrlBDhvVAVfXBWeehOhsg_4g8OYUIvI9l4g5AWJtu48-zqMmk9c4GNrGk5eGjuZxyEr-KLQXJbjBG1fYdRXLwdOyXPTYKA6IaIZgPgz9fliWMJ0MhBMi5EIutH35pLaBN3RPgqumJpBvTS8KEDo6UQHyySCklKnsCs.webp?r=16b",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYrqTV8jU9B9yDpLDj2I_dbulz5mXqx57RkUB7wD5VpYMvtH8JSonwoWhk3xPN-Ss290IsQNhohSpiHp7ukwX43G0WoAJeSRGTs.jpg?r=012",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRhcqtKSjO8pntJjTOuwFXi-7yuPPZeFkWQnHCohkDL7v1t7X_jjUGR3VL-KepJI7_URTDQhX5gJGWoHfp5TtBas7jwm9prBo64.webp?r=e4f",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVejCAR3f3Bp44fjG6MZUfABK8ZGhxT3fOB1W_ks4jXYl-rcZhvmHV1Y5gYEU8Snwtsm9htmi8Bjuae-fc7TJiadhSpT256yM4.jpg?r=471",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeeA_W65wBQbOnFR3UOHdLEgw39tVSu1tx9bma3gQViY4EA-44RGaSJeq8uj7It50myxRwy0W1kF-TV5kjVgXoBI7IqSzK_ansE.jpg?r=f25",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVkQtc4vhQ_fCTo1OMqKOhAbF8Sd8nDJY2QEqPlR1zoEVziSkTWb18lNjpOrUXvfm7Dxgf488sox7jFD9ST-FlwjsHPObY2NfY.jpg?r=970",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVX0FUnpmWoJlx4UL3w4zmoBUQGTA9ILWoMzb7NNR5FMfxGu2CgMOXSZ9en9W2gbsG3uXZgJSbRlBH1021PGxOk-JYWcDignsKI.jpg?r=8ca",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTjTNmB_oaWMMzLb2-xH2qTMWPI2YnV7a1XoIl0Y71SnUKRxnw68snPOuvfD6u-hXnW_U8DldIrT0TKQuhdmds5qzaowZNfOf5M.jpg?r=28f",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABafEkwgV-ddaqb-IzfVJPCI7Kc4kSddq7NjUsnrOePu5t6IicZvd_lkxEjYiQkQ2sIpsVBC7Gk653tPkWAy9X9ef9dg3q7LDLpg.webp?r=c30",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW57ZadqOnI2EgoF5PyjWGxItt6ml_ZR5t37yZYzLUe_NZMxronSYLGG3iYJaTzFo3HZJE-fiuwtrXbArVDthxj9yE4ZcG22o0M.webp?r=7ec",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbJAGPizAy0qdkpHxiCmKoqtbnV2XHTmGZhQrjdjmCAuC3W0tVJrO3MX8vauEpK1Ls6fosEPMfREYzabQ-wPIXCiIZOx7zyidBM.webp?r=9de",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABafCk0pcyV7C4bWPrAuUgepZZXuT_qq6L0q0h-UPv3HP4ZtkOjk6sWm5dgO5pREcEEi_VtnhpbphhNVlv_HAiLFc2j7pKaeyzU8.webp?r=f0e",
      "https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRoFFXvEOifi0Sq5IlJ2gYjBl7JXgmhhc5I89rYkne2ml8gFDMLG7TIHfkNtOU0Y5nZTLOpjYcb3nHHJxgEAz5gIAmuuxH-CLxs.webp?r=53d"
    ];
    let random_enlaces = [];
    let aleatorios:number[] = [];
    let posContador = 0
    while (posContador < 25) {
      let aleatorio = Math.floor(Math.random() * todos_enlaces.length);
      if(!seEncuentra(aleatorios, aleatorio)) { //evitar que aparezca la misma imagen en la misma fila, pero la imagen puede aparecer en distintas categorias
        random_enlaces.push(todos_enlaces[aleatorio]);
        aleatorios.push(aleatorio);
        posContador++;
      }
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
              <div className="carousel-caption" style={{textAlign:'left', width:'100%', height:'30%', marginLeft:'-15%', marginBottom:'30%'}}>
                <h5 style={{width:"50%"}}><img src="logo1.png" /></h5>
                <p style={{marginLeft:'5%', fontSize:'1.5vw', width:"50%"}}>Una serie surcoreana donde personas con problemas económicos participan en juegos
                  infantiles mortales para ganar un gran premio en efectivo. 
                  Combina drama, suspenso y crítica social.</p>
                <BotonSimple desc="Reproducir" icono="reproducir_video.png"/>
                <BotonSimple desc="Más información" icono="https://cdn-icons-png.flaticon.com/512/0/472.png"/>
                <button type="button" className="btn btn-outline-light btn-secondary" style={{display: 'inline-flex', marginLeft:"45%", borderRadius:"100%", alignItems: 'center', border:'none', width: "min(3vw, 50px)", height: "min(3vw, 50px)"}}>
                  <img src="sonido_icono.png" style={{width:"100%", height: "100%", marginRight:"0.5vw"}}/>
                </button>
                <img style={{marginLeft:"2vw", height: "min(3vw, 50px)", width: "7vw", display: 'inline-flex'}} src="clasificacion.png"/>
              </div>
        </div>
        <div style={{marginLeft:'4%'}}>
          <div>
            <h1 className="tituloSeccion">Favoritos del público</h1>
            <Catalog id="favoritos" enlaces={obtenerEnlaces()}/>
          </div>
          <div style={{marginTop:"5%"}}>
            <h1 className="tituloSeccion">Las 10 series más populares en Honduras hoy</h1>
            <div id="top10" className="carousel slide" style={{marginTop:"1%"}} data-bs-touch="true">
              <div className="carousel-indicators" style={{margin:"0", justifyContent: "flex-end" , marginBottom:"18%"}}>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="estiloContenido">
                    <ContentMayor enlace1="1.png" enlace2="https://m.media-amazon.com/images/I/71n+CmrVcrL._AC_UF894,1000_QL80_.jpg" />
                    <ContentMayor enlace1="2.png" enlace2="https://www.findelahistoria.com/web/wp-content/uploads/2021/12/el-juego-del-calamar-squid-game-serie-mejor-poster.jpg" />
                    <ContentMayor enlace1="3.png" enlace2="https://seriescienciaficcion.wordpress.com/wp-content/uploads/2015/02/netflix-daredevil-poster.jpg" />
                    <ContentMayor enlace1="4.png" enlace2="https://static.posters.cz/image/350/posters/the-witcher-season-3-i177456.jpg" />
                    <ContentMayor enlace1="5.png" enlace2="https://i.redd.it/aw62ganh7o801.jpg" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="estiloContenido">
                    <ContentMayor enlace1="6.png" enlace2="https://cineycine.com/wp-content/uploads/2021/01/lupin-netflix-poster.jpg" />
                    <ContentMayor enlace1="7.png" enlace2="https://www.elheraldo.hn/binrepository/1200x1771/0c0/0d0/none/45933/TQNN/10_11527071_20250731131654.jpg" />
                    <ContentMayor enlace1="8.png" enlace2="https://i.pinimg.com/736x/88/43/1a/88431a9ed1430dd5359e13002b24c824.jpg" />
                    <ContentMayor enlace1="9.png" enlace2="https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZCEwS4vhhov7fT2Yze2kPra8IQSuljW05TGwgIKBkx09CTDJuPXvt1JnCSpRXkbxwXpuiHULanLs7bfDngCGNrPVSvV1BfjdeN01H8TmDaYJ8GKo1Ng9JBJ08v5IkmACCSb_WzcDoKwaVB0TR_wwvtU04u7f5-rez6MP0h5dtavr2VZ.jpg?r=f6b" />
                    <ContentMayor enlace1="10.png" enlace2="https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABepkkAy-LIw6uouQX-lIOXXlGBcBdqICOuu7mxN0bHEM9TLj0wF_zKk50zQgydG7WLtTJVIT7imcZGGi7Tl18QnwRbETcTnVwbEOmK2-jjO05ueH2lp_oglNSTXvrt4MhMYKKSj-mf4dbH8sGcmucse7i-2p-l0p5mC7__WrsfGMXMhXxicjL6fVfbWB7CdMVPyXFyxHDOFBAoqRu_oHvuJTETo1BNZ3nEHSrz2TTuvg5MNeIigYOwZdKkCd0-zdIhWE--OzGNsyy78z4v1ICO2H9nuTrpEbrjRQP_d1X2MmHYohX94.jpg?r=37d" />
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#top10" data-bs-slide="prev" style={{width:"3%"}}>
                <span className="carousel-control-prev-icon" style={{marginLeft:"-125%", height:"20%"}} aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#top10" data-bs-slide="next" style={{width:"5%"}}>
                <span className="carousel-control-next-icon" style={{marginRight:"0%", height:"20%"}} aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
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
            <div className="unCambioEnEstilo">
              <ContenidoVisto enl="https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdxTFgwVZnsstVJpWDg9GxFzfFEUdWzudowzpN_nd8exAzMduynydFOtg5vQpa_cjX9J7CJLUXWv7SiSjGggvwcac25L_YAn2rw.webp?r=4c8" progreso="45%"/>
              <ContenidoVisto enl="https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWE-qBxIDOp9LFgaqxjvVfbaAXLLqzgZwiwXr0HgkwLsysda1Ucvkg4VPQ9OCD8JyZ9Kj5lJdz5FRDYIi-VTrKLvCyaKuEgY5pc.jpg?r=649" progreso="67%"/>
              <ContenidoVisto enl="https://occ-0-2668-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbcWK39F0w1mtDgyB-yNgY2eISRXd0I6taP3Ykxiz-J4GRH8poJOb8CThP4zXTSsBY6c90WLnzoA5BlCCS0GH0ysL99Ph1kBBt4.jpg?r=c62" progreso="10%"/>
            </div>
          </div>
          <div id="lista" style={{marginTop:"5%"}}>
            <h1 className="tituloSeccion">Mi lista</h1>
            <Catalog id="lista" enlaces={obtenerEnlaces()}/>
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
