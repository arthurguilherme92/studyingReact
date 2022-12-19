import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <>
        <h1>Execute Function</h1>
        <button onClick={myFunction}>Chick here</button>
    </>
  )
}

export default ExecuteFunction