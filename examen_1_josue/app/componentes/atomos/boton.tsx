interface Parametros {
    desc:string;
    icono:string;
}
export default function BotonSimple({desc, icono}:Parametros) {
    return (
        <button type="button" className="btn btn-outline-light btn-secondary" style={{gap:'5%',display: 'inline-flex', alignItems: 'center', width:'14vw', border:'none', fontWeight:'bold', marginLeft:'5%', whiteSpace:'nowrap'}}>
            <img src={icono} style={{width:'2.5vw', height:'auto'}}/>
            <span style={{fontSize:'1vw'}}>{desc}</span>
        </button>
    );
}