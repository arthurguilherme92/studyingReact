import React from 'react'

const Message = ({msg}) => {
  return (
    <div>
        <h1>A mensagem correta:</h1>
        <p>{msg}</p>
    </div>
  )
}

export default Message