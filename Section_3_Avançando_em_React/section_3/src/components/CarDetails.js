import React from 'react'

const CarDetails = ({brand, color, km, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca : {brand}</li>
            <li>Cor : {color}</li>
            <li>Km : {km}</li>
        </ul>
        {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetails