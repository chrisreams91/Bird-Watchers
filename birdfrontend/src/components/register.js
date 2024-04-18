import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {

    const axiosWithAuth = () => {
      return axios.create({
        baseURL: "http://localhost:8080",
        headers: {
          "Content-Type": "application/json",
        }
      });
    };

    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usernamename = useRef("");
    const firstnamename = useRef("");
    const lastnamename = useRef("");
    const emailname = useRef("");
    const passwordname = useRef("");
    const navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
         usernamename.current.value = "";
         firstnamename.current.value = "";
         lastnamename.current.value = "";
         emailname.current.value = "";
         passwordname.current.value = "";
        try {
                const token = "your_bearer_token";
                const axiosInstance = axiosWithAuth(token);
                await axiosInstance.post("/register", {
                    username,
                    firstname,
                    lastname,
                    email,
                    password
                });
                alert("User Registered Successfully!");
                navigate('/login');
            } catch (err) {
                alert("Failed to register user: " + err.message);
            }
        };

    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>User Registration</h1>

    <form>
        <div class="form-group">
          <label>User name</label>
          <input type="text" ref={usernamename} class="form-control" id="username" placeholder="Enter Username"

          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>First Name</label>
          <input type="text" ref={firstnamename} class="form-control" id="firstname" placeholder="Enter First Name"

          value={firstname}
          onChange={(event) => {
            setFirstname(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>Last Name</label>
          <input type="text" ref={lastnamename} class="form-control" id="lastname" placeholder="Enter Last Name Optional"

          value={lastname}
          onChange={(event) => {
            setLastname(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" ref={emailname} class="form-control" id="email" placeholder="Enter Email"

          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}

          />

        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password" ref={passwordname} class="form-control" id="password" placeholder="Enter password"

            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}

            />
          </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>

      </form>
    </div>
    </div>
     </div>
    );
  }

  export default Register;