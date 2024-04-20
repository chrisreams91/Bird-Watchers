import React from "react";
import { useState, useEffect, useRef } from 'react';
import styles from "../otherbirders.css"
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function ListOfUsers() {

  const[users, setUsers]=useState([]);
  const[birds, setBirds]=useState([]);
  const { username } = useParams();

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
            <h1>Check Out What Your Fellow Birders Have Seen!</h1>
              <table>
                <thead>
                  <tr>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <tr key={user.id}>
                  <td>
                  <a href={`/myBirds/entries/${user.username}`}>
                  {user.username}
                  </a>
                  </td>
            </tr>
            ))}
            </tbody>
          </table>
        </div>

    )


}

export default ListOfUsers;