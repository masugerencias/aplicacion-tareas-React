import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css"

function ListaDeTareas(){
/* aqui se van a ir añadiendo tareas al estado tareas, que se mapeará en el return. */
const [tareas, setTareas] = useState([]);
/* dentro de usestate popnemos el array vacio como estado iniicial. */ 

    const agregarTarea = tarea => {
        if( tarea.texto.trim()){
            /* verificamos que la cadena no esté vacia */
            tarea.texto = tarea.texto.trim()
/*              Le quitamos los espacios */
            const tareasActualizadas = [tarea, ...tareas]
            /* lo metemos en un array de las tareas con la nueva al ppio */
            setTareas(tareasActualizadas);
        }
}

const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas)

}

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea =>{
             if (tarea.id === id) {
            tarea.completada = !tarea.completada;
        }
            return tarea
        });
        setTareas(tareasActualizadas)
    
    }

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {/* aqui vamos a renderizar una lista de componentes */}
                {
                  tareas.map((tarea)=>
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            /* hay que popnerlo como ducplicado porque el key no es como un prop! por eso se pone el prop alado */
                           texto = {tarea.texto}
                           completada = {tarea.completada} 
                           eliminarTarea = {eliminarTarea} 
                           /* eliminar tarea se lo estoy pasando como prop */
                            completarTarea={completarTarea}/>

                  )  
                }


            </div>
        </>
    )
}

export default ListaDeTareas