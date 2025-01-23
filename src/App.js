import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Documentación de Sprint Planning 
        <br></br>
        Proyecto: Residencial Los Robles 
        <br></br>
        <br></br>
        Sprint: 1
        <br></br> 
        Duración: 5 días laborales
        <br></br> 
        Fecha de inicio: [22/01/25]
        <br></br> 
        Fecha de finalización: [27/01/25]
        <br></br> 
        Objetivo del Sprint: Desarrollar las funcionalidades iniciales para la gestión de notificaciones. 
        <br></br>
        <br></br>
        <br></br>
        <h3>Meta del Sprint </h3>
        <br></br>
        <br></br>
        Proveer una solución funcional para que los residentes reciban notificaciones de vencimientos de pagos mediante correo y SMS. 
        <br></br>
        <br></br>
        <h3>Tareas del Sprint </h3>
        <br></br>
        <br></br>
        1.Diseñar sistema de notificaciones
        <br></br>
        <br></br>
        2.Configuración del envío de correos electrónicos automáticos.
        <br></br>
        <br></br>
        3.Configurar alertas por correo y SMS
        <br></br>
        <br></br>
        Cada miembro tiene 2 horas diarias disponibles para tareas del Sprint.
        Total de horas disponibles del equipo (3 miembros x 5 días x 3 horas): 30 horas.
        <br></br>
        <br></br>
        <h3>Criterios de Aceptación</h3>
        <br></br>
        <br></br>
        Las notificaciones deben enviarse por correo y SMS correctamente, con contenido claro y comprensible.
        <br></br>
        <br></br>
        El módulo de gestión de pagos debe permitir registrar, validar y actualizar los pagos de los residentes.
        <br></br>
        <br></br>
        El sistema debe generar reportes precisos de los pagos registrados.
        <br></br>
        <br></br>
        <h3>Riesgos identificados</h3>
        <br></br>
        <br></br>
        Retrasos en la configuración de alertas SMS
        <br></br>
        <br></br>
        </p>
        <p>
        Proyecto: Residencial Los Robles
        <br></br>
        Sprint: 2
        <br></br>
        <br></br>
        Duración: 5 días laborales
        <br></br>
        Fecha de inicio: [27/01/25]
        <br></br>
        Fecha de finalización: [01/02/25]
        <br></br>
        Objetivo del Sprint: Desarrollar las funcionalidades iniciales para la gestión de pagos.
        <br></br>
        <br></br>
        <h3>Meta del Sprint</h3>
        <br></br>
        <br></br>
        Implementar un módulo de gestión de pagos que permita al administrador registrar las contribuciones de los residentes.
        <br></br>
        <br></br>
        <h3>Tareas del Sprint</h3>
        <br></br>
        <br></br>
        1.Desarrollo del frontend para el sistema de pagos.
        <br></br>
        <br></br>
        2.Configuración del backend del sistema de pagos.
        <br></br>
        <br></br>
        3.Desarrollo del módulo de reportes
        <br></br>
        <br></br>
        Cada miembro tiene 3 horas diarias disponibles para tareas del Sprint.
        Total de horas disponibles del equipo (3 miembros x 5 días x 3 horas): 45 horas.
        <br></br>
        <br></br>
        <h3>Criterios de Aceptación</h3>
        <br></br>
        <br></br>
        El módulo de gestión de pagos debe permitir registrar, validar y actualizar los pagos de los residentes.
        <br></br>
        <br></br>
        El sistema debe generar reportes precisos de los pagos registrados.
        <br></br>
        <br></br>
        <h3>Riesgos identificados</h3>
        <br></br>
        <br></br>
        Dificultades en la validación del sistema de pagos
        </p>
        <a
          className="App-link"
          href="https://github.com/Kaz-gif/Documentacion.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio de git
        </a>
      </header>
    </div>
  );
}

export default App;
