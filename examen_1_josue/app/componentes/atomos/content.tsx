
interface Valores {
    enlace:string;
}
export default function Content({enlace}:Valores) {
    return (
    <button>
        <img src={enlace} style={{borderRadius:"2px"}}/>
    </button>
    );
}