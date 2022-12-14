import React from 'react'
import {useState} from 'react'

function ManageData() {

  const [someData, setSomeData] = useState(10, 15)
  console.log(someData);

  return (
    <div>
      <h1>Manage Data</h1>
      <p>Value of someData is: {someData}</p>
      <button onClick={() => {setSomeData(15)}}>Change someData</button>
    </div>
  )
}

export default ManageData