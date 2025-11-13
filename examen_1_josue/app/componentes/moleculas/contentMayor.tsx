interface Enl_Par {
    enlace1:string;
    enlace2:string;
}
export default function ContentMayor({enlace1, enlace2}:Enl_Par) {
    return (
    <a href="https://www.netflix.com" target="_blank" style={{width:"20%", height:"17vw"}}>
        <button className="boton_gif" style={{display: "flex"}}>
            <img src={enlace1} style={{width:"50%"}}/>
            <img src={enlace2} style={{borderRadius:"2px", width:"50%"}}/>
        </button>
    </a>
    );
}