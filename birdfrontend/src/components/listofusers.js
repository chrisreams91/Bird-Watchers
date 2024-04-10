import React from "react";
import { useState, useEffect, useRef } from 'react';






function ListOfUsers() {

  const[users, setUsers]=useState([]);

useEffect(() => {
     const getUsers = async () => {
       try {
         const response = await fetch('http://localhost:8080/user/getAll');
         const data = await response.json();
         setUsers(data);
       } catch (error) {
         console.error('Error fetching users:', error);
       }
     };
    getUsers();
   }, []);

    return (

        <div>
            <th>Check Out What Your Fellow Birders Have Seen!</th>

          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
            </tr>
          ))}
        </div>

    )


}

export default ListOfUsers;