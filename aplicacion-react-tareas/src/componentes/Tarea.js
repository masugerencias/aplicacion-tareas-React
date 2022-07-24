import React from "react";

function Tarea( {texto} ){
    /* esto es un prop que se mete  como parametro
    y que dentro del return lo usaré */
    return(
        <div className="tarea-contenedor">
            <div className="tarea-texto">
                {texto}
                {/* aqui hago uso del prop que he pasado en la funcion */}
                
            </div>
            <div className="tarea-icono">
                icono de la X
            </div>

        </div>


    );


}
export default Tarea;