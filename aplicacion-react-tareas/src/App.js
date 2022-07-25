import './App.css';
import logo1 from './imagenes/logo1.jpg'
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={logo1}
        className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <Tarea texto="esto es el prop joder!"/>
      </div>
    </div>
  );
}

export default App;


/* 
Entonces el prop se pone en el componente como si fuera un aparametrno.
Para luego poner lo que es en el app.js donde se renderizxa ese componente 

*/