import React, { useState, useEffect } from 'react'
import axios from 'axios'
const View = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        viewdata();
    }, [])
    const viewdata = async () => {
        const res = await axios.get('https://fsd-backend-sem-vi-ds-a.onrender.com/users');
        console.log(res);
        setUsers(res.data);
    }

    return (
        <div>
            <h1>Registerd Users List</h1>
            <table style={{ border: '2px solid red', backgroundColor: 'greenyellow', width: '100%' }}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default View