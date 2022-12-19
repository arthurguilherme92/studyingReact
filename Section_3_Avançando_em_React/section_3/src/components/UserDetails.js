import React from 'react'

const Challenge = ({nome, year}) => {

  return (
    <div>
      <h2>{nome}</h2>
      <p>{year}</p>
        {year >=18 ? (<p>pode tirar carteira de Habilitação!</p>) : (<p>menor de idade</p>)}
    </div>
  )
}

export default Challenge