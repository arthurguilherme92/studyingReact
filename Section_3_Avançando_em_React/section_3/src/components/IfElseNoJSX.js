import {useState} from 'react';

function IfElseNoJSX() {

    const [name] = useState("Arthur Guilherme")

  return (
    <div>
        <h1>IfElse</h1>
        {name === "Arthur Guilherme" ? (
          <div>
            <p>Name is Arthur</p>
          </div>
        ) : (
          <div>
            <p>This name wasn't found!</p>
          </div>
        )}
    </div>
  )
}

export default IfElseNoJSX