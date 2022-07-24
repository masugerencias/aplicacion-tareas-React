import React from "react";
import "../hojas-de-estilo/TareaFormulario.css"


function TareaFormulario(){
    
    return(

        <form className="tarea-formulario">
            <input 
            className="tarea-input"
            type="text"
            placeholder="pon una tarea"
            name="texto"
            
            
            />
            <button className="tarea-boton">
                Agregar tarea
            </button>


        </form>


    )
}

export default TareaFormulario;