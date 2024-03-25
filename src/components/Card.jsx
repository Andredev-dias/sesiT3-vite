import Foto01 from "../assets/imgs/foto1.jpg"

export default function Card(){
    return(
        <div>
            <h2>Paisagem 01</h2>
            <img src={Foto01} alt="Paisagem" width={200} height="auto"/>
            <p>qualquer coisa</p>
            <p>batata doce</p>
        </div>
    )
}