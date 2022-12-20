import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from "react";


function App() {
  const n = 14;
  const [nome] = useState("Arthur Guilherme")

  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React com CSS</h1>
      {/*CSS de Componente*/}
      <MyComponent />
      <p>Parágrafo do APP.JS</p>
      {/*Inline CSS*/}
      <p style={{color: "yellow", padding: "4rem", backgroundColor: "blue"}}>Este elemento foi estilizado de forma INLINE</p>
      {/*Dinamic Inline CSS*/}
      <h2 style={n < 8 ?{color: "red"} : {color: "green"}}>Css Dinâmico</h2>
      <h2 style={n > 8 ?{color: "red"} : {color: "green"}}>Css Dinâmico</h2>
      <h2 style={nome === "Arthur Guilherme" ?{color: "blue", backgroundColor: "white"} : null}>Teste Nome</h2>
      {/*Dinamic Classes*/}
      <h2 >Este título terá Classe dinâmica</h2>
    </div>
  );
}

export default App;
