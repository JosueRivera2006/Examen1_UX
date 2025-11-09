interface Valores {
    enlace:string;
}
export default function Content({enlace}:Valores) {
    return (
    <button type="button" className="btn btn-outline-light" style={{gap:'5%',display: 'inline-flex', alignItems: 'center', width:'100%', border:'none', fontWeight:'bold', marginLeft:'5%', whiteSpace:'nowrap'}}>
        <img src={enlace} style={{objectFit: 'cover'}}/>
    </button>
    );
}