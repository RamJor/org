import { useState } from "react";
import "./Miorg.css"

const Miorg = (props) => {
    //Estado - hooks ayudan a trabajar con el comportamiento de react
    //
    // utilizar un estado cosnt[nombreVariable, funcionQueActualiza] = useState(ValorInicial )
     
   /*  const [mostrar, actualizarMostrar] = useState(true)
        const manejarClick= (mostrar)=> {
            actualizarMostrar(!mostrar)
        } */

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>    
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default Miorg