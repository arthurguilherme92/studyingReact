import './App.css';

import { useState } from 'react';

import TemplateExpression from './components/TemplateExpressions';
import Events from './components/Events';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';



function App() {

const cars = [
  {id: 1, brand: "Fiat", km: 230.000, cor:"preto", newCar: false},
  {id: 2, brand: "Renault", km: 0, cor:"preto", newCar: true},
  {id: 3, brand: "Wolksvagem", km: 0, cor:"preto", newCar: true},
  {id: 4, brand: "Chevrolet", km: 280.000, cor:"preto", newCar: false},
]

const showMessage = () => {
  console.log("Function of the Father's component")
}

const [message, setMessage] = useState("");

const handleMessage = (msg) => {
  setMessage(msg)
}
  
  return (
    <div className="App">
    <TemplateExpression />
    <Events />
    <ManageData />
    <ListRender />
    <ConditionalRender />
    {/*Props*/}
    <ShowUserName name="Arthur" />
    {/*Destructuring*/}
    <CarDetails brand="Fiat" km={256.567} cor="cinza" novo={false}/>
     {/*Reusing Components*/}
     <CarDetails brand="Ford" km={278.932} cor="azul" novo={true}/>
     <CarDetails brand="Hyundai" km={160.000} cor="preto" novo={false}/>
     {/*Render in Loop */}
     {cars.map((car) => (
      <CarDetails 
      key={car.id}
      brand={car.brand} 
      km={car.km} 
      cor={car.cor} 
      newCar={car.newCar}/>
     ))}
     {/* Fragments */}
     <Fragments propFragment="PropFragment"/>
     {/*Children Prop*/}
     <Container myValue="Nathan é meu sobrinho XD">
        <h2>Arthur Guilherme, children prop</h2>
      </Container>
      {/* Functions in Props*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/* State lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Challenge*/}
      <UserDetails />
    </div>
  );
}

export default App;
