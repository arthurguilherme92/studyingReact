import React from 'react'
import { useState } from 'react'

const Challenge = () => {

  const [testList] = useState(["Arthur", "Junior", "Nathan"]);

  return (
    <div>
        <h1>Challenge - Section 3</h1>
        <ul>
          {testList.map((nome) => (
            <li>{nome}</li>
          ))}
        </ul>
    </div>
  )
}

export default Challenge