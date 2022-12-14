import React from 'react'
import {useState} from 'react'

const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("Guilherme");

  return (
    <div>
        {x && <p>Se for verdadeito, SIM!</p>}
        {!x && <p>Se for falso!</p>}
        {name === "Arthur" ? (
          <div>
            <h2>Olá Arthur, trank?</h2>
          </div>
        ) : (
          <div>
            <h2>VocÊ não é o Arthur, cadê ele?</h2>
          </div>
        )}
        <button onClick={() => {setName("Arthur")}}>Change Name</button>
    </div>
  )
}

export default ConditionalRender