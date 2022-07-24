import React from "react";
import '../hojas-de-estilo/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea( {id, texto, completada, completarTarea, eliminarTarea } ){
    /* esto es un prop que se mete  como parametro
    y que dentro del return lo usaré */
    return(
        <div className={completada ? 'tarea-contenedor completada': 'tarea-contenedor' }>
            {/*         /* Si el valor del prop completada es TRUE entonces le asignamos dos clases separadas por un espacio : sino, pues que nos asigne la clase tarea-contenedor asecas.*/
}
            
            <div className="tarea-texto"
                onClick={()=> completarTarea(id)}>
                {texto}
                {/* aqui hago uso del prop que he pasado en la funcion */}
                {/* Onclick en el div de la tarea texto, se ejecutara la funcion de "completarTarea" con el id de la tarea, que creo quie se crea solo con el map? */}
            </div>
            <div className="tarea-contenedor-iconos"
            onClick={() => eliminarTarea(id)}>
                {/* onclik es un prop!!! y hay quye pasarlo en el otro lado como prop tambien */}
                <AiOutlineCloseCircle className="tarea-icono"/>
            </div>

        </div>


    );


}
export default Tarea;