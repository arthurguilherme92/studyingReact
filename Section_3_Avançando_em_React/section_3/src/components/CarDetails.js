import React from 'react'

const CarDetails = ({brand, km, cor, novo}) => {
  return (
    <div>
        <h1>CarDetails</h1>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
        {novo && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetails