import React from 'react'
import { useState } from 'react'
const ListRender = () => {
  
  const [list] = useState(["arthur", "thávia", "léa", "alexander jr"])
  const [users, setUsers] = useState([
    {id: 1, name: "Arthur", idade: 30},
    {id: 2, name: "Alex", idade: 25},
    {id: 3, name: "Léa", idade: 22},
    {id: 4, name: "Thávea", idade: 27}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    setUsers((prevUsers) => {

        return prevUsers.filter((user) => randomNumber !== user.id)

    })
  }
  
    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.idade}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender