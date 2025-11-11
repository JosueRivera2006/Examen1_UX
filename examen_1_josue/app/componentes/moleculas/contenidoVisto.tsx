import Content from "../atomos/content";
interface Los_Valores {
    enl:string;
    progreso:string;
}
export default function ContenidoVisto({enl, progreso}:Los_Valores) {
    return (
        <div>
           <Content enlace={enl}/>
            <div className="progress" style={{borderRadius:"0px", height:"3px", marginLeft:"20%", marginRight:"20%", backgroundColor: "rgba(128,128,128,0.5)"}}>
                <div className="progress-bar" role="progressbar" style={{ width: progreso, backgroundColor: "red"}} aria-valuenow={19} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
        </div>
    );
}