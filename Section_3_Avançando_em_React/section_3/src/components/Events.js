const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou um evento!")
        
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Verdadeiro!</h1>
        } else {
            return <h2>Falso!</h2>
        }
    }

   return (
    <div>
        <h1>Events is here!</h1>
        <button onClick={handleMyEvent}>Click</button>
        {renderSomething(false)}
    </div>
   )
}

export default Events