import './App.css';
import RenderizacaoCondicional from './components/RenderizacaoCondicional';
import IfElseNoJSX from './components/IfElseNoJSX';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';

function App() {
  const [userName] = useState("Arthur Guilherme")

  const cars = [
    {id: 1, brand: "Fiat", color: "Gray", km: 278000, newCar: false},
    {id: 2, brand: "Ford", color: "Ice", km: 0, newCar: true},
    {id: 3, brand: "Vokswagem", color: "Blue", km: 128000, newCar: false}
  ];

  return (
    <div className="App">
      <RenderizacaoCondicional />
      <IfElseNoJSX />
      <ShowUserName name={userName}/>
      <CarDetails brand="Volkswagem" color="Blue" km={200000} newCar={false}/>
      <CarDetails brand="Ford" color="Red" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Gray" km={260000} newCar={false}/>
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}/>
      ))}
      {/*Fragments */}
      <Fragments />
      {/*Children */}
      <Container>
        <p>Este é o conteúdo do Container!</p>
      </Container>
      <Container MyValue="teste1">
        <h3>Teste 2</h3>
      </Container>
    </div>
  );
}

export default App;
