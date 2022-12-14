import './App.css';
import TemplateExpression from './components/TemplateExpressions';
import Events from './components/Events';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';



function App() {


  
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
    </div>
  );
}

export default App;
