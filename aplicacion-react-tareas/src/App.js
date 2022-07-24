import './App.css';
import logo1 from './imagenes/logo1.jpg'

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
        
      </div>
    </div>
  );
}

export default App;
