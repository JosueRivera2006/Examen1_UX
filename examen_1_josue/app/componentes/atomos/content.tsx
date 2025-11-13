
interface Valores {
    enlace:string;
}
export default function Content({enlace}:Valores) {
    return (
    <a href="https://www.netflix.com" target="_blank">
        <button className="boton_gif">
            <img src={enlace} style={{borderRadius:"2px"}}/>
        </button>
    </a>
    );
}