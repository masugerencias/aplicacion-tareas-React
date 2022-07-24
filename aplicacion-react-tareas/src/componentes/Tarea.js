import React from "react";
import '../hojas-de-estilo/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea( {texto, completada} ){
    /* esto es un prop que se mete  como parametro
    y que dentro del return lo usaré */
    return(
        <div className={completada ? 'tarea-contenedor completada': 'tarea-contenedor' }>
            {/*         /* Si el valor del prop completada es TRUE entonces le asignamos dos clases separadas por un espacio : sino, pues que nos asigne la clase tarea-contenedor asecas.*/
}
            
            <div className="tarea-texto">
                {texto}
                {/* aqui hago uso del prop que he pasado en la funcion */}
                
            </div>
            <div className="tarea-contenedor-iconos">
                <AiOutlineCloseCircle className="tarea-icono"/>
            </div>

        </div>


    );


}
export default Tarea;