import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
        <h1>Container</h1>
        {children}
        <p>minha fala:{myValue}</p>
    </div>
  )
}

export default Container