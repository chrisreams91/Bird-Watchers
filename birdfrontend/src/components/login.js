import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from '../login.css'


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/user/login", {
            email: email,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);

             if (res.data.message === "Email Does Not Exist. Please Register For An Account.")
             {
               alert("Email Does Not Exist. Please Register For An Account.");
             }
             else if(res.data.message === "Login Success")
             {

                navigate('/home');
             }
              else
             {
                alert("Please Enter Valid Credentials.");
             }
          }, fail => {
           console.error(fail);
  });
        }


         catch (err) {
          alert(err);
        }

      }

    return (
    <div className="loginSection">
    <div className="loginHeader">
    <h1>BirdWatchers</h1>
    </div>
       <div className="loginText">
            <div class="container">
            <div class="row">

             </div>

             <div class="row">
             <div class="col-sm-6">

            <form>
        <p>
        <div class="form-group">
          <input type="email"  className="loginEntry" class="form-control" id="email" placeholder="Enter Name"

          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}

          />

        </div>
        </p>

        <div class="form-group">
            <input type="password"  className="loginEntry" class="form-control" id="password" placeholder="Enter Password"

            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}

            />
          </div>
          <hr/>
          <div>
                  <button type="submit" className="loginButton" class="btn btn-primary" onClick={login} >
                                  <h2>Login</h2>
                  </button>
                  </div>
              </form>

            </div>
            </div>
            </div>

     </div>
     </div>
    );
  }

  export default Login;