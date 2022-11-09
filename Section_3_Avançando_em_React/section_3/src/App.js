import './App.css';
import RenderizacaoCondicional from './components/RenderizacaoCondicional';
import IfElseNoJSX from './components/IfElseNoJSX';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const [userName] = useState("Arthur Guilherme")

  return (
    <div className="App">
      <RenderizacaoCondicional />
      <IfElseNoJSX />
      <ShowUserName name={userName}/>
      <CarDetails brand="Volkswagem" color="Blue" km={200000} newCar={false}/>
      <CarDetails brand="Ford" color="Red" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Gray" km={260000} newCar={false}/>
    </div>
  );
}

export default App;
