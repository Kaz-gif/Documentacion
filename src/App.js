import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        El backlog se almacena en una herramienta de gestión de proyectos como Trello, Asana o Jira para facilitar su seguimiento.
        </p>
        <a
          className="App-link"
          href="https://github.com/Kaz-gif/ACT-INT-Lopez-Brian.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>
      </header>
    </div>
  );
}

export default App;
