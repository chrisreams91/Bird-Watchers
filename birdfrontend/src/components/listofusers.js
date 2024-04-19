import React from "react";
import { useState, useEffect, useRef } from 'react';


function ListOfUsers() {

  const[users, setUsers]=useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch("http://localhost:8080/user/getAll", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, []);

    return (

        <div>
            <th>Check Out What Your Fellow Birders Have Seen!</th>
            {users.map((user) => (
            <tr key={user.id}>
                  <td>
                  <a href={`/myBirds/${user.id}`}>
                  {user.username}
                  </a>
                  </td>

            </tr>
            ))}
        </div>

    )


}

export default ListOfUsers;