import React from "react";

import {useState} from "react";

const ListRender = () => {
    const [list] = useState(["Patrick", "João", "Carlos"])
    const [users, setUsers] = useState([
        {id: 1, name: "Patrick", age: 19},
        {id: 2, name: "João", age: 23},
        {id: 3, name: "Carlos", age: 23},

    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }
    return (
        <div>
            {/*Render sem Key*/}
            <ul>
                {list.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>

            {/*Render com Key*/}
            <ul>
                {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>
            {/*Previous state*/}
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
}

export default ListRender;