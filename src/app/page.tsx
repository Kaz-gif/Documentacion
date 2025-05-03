import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <header>
          <h1>Residencial Los Robles</h1>
          <p>Bienvenido al portal de gestión vecinal</p>
        </header>

        <nav>
          <a href="#pagos">Gestión de Pagos</a>
          <a href="#notificaciones">Notificaciones</a>
          <a href="#incidencias">Incidencias</a>
          <a href="#reportes">Reportes</a>
        </nav>

        <div className="container">
          <div id="pagos" className="card">
            <h3>Gestión de Pagos</h3>
            <p>
              Consulta tu historial de pagos y realiza nuevas contribuciones
              fácilmente.
            </p>
            <a href="#" className="btn">
              Ver historial de pagos
            </a>
            <a href="#" className="btn">
              Realizar nuevo pago
            </a>
          </div>

          <div id="notificaciones" className="card">
            <h3>Notificaciones</h3>
            <p>
              Últimos avisos sobre eventos, servicios y actualizaciones
              importantes:
            </p>
            <ul>
              <li>🔔 Corte de agua programado - 10 de noviembre</li>
              <li>🔔 Asamblea general - 15 de noviembre a las 19:00 hrs</li>
              <li>🔔 Nuevo parque en construcción en la zona norte</li>
            </ul>
          </div>

          <div id="incidencias" className="card">
            <h3>Reportar Incidencia</h3>
            <p>¿Algún problema en la colonia? Repórtalo aquí.</p>
            <a href="#" className="btn">
              Nueva incidencia
            </a>
          </div>

          <div id="reportes" className="card">
            <h3>Reportes</h3>
            <p>Visualiza reportes financieros y de participación vecinal.</p>
            <a href="#" className="btn">
              Ver reportes
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
