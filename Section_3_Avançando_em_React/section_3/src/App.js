import './App.css';
import RenderizacaoCondicional from './components/RenderizacaoCondicional';
import IfElseNoJSX from './components/IfElseNoJSX';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';

function App() {
  const [userName] = useState("Arthur Guilherme")

  return (
    <div className="App">
      <RenderizacaoCondicional />
      <IfElseNoJSX />
      <ShowUserName name={userName}/>
    </div>
  );
}

export default App;
