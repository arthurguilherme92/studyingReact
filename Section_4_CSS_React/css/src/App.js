import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React com CSS</h1>
      {/*CSS de Componente*/}
      <MyComponent />
      <p>Parágrafo do APP.JS</p>
    </div>
  );
}

export default App;
