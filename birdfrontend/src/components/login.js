import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from '../login.css'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password
            });
            const jwtToken = response.data.token;
            localStorage.setItem('jwtToken', jwtToken);

            navigate('/home');
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Login failed');
            alert("Please enter valid credentials or register for a new account");
        }
    };

    return (
        <div className="loginSection">
            <div className="loginHeader">
                <h1>BirdWatchers</h1>
            </div>
            <div className="loginText">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="loginEntry form-control"
                                        id="username"
                                        placeholder="Enter Username"
                                        value={username}
                                        onChange={(event) => {
                                            setUsername(event.target.value);
                                        }}
                                    required />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="loginEntry form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    required />
                                </div>
                                <hr />
                                <div>
                                    <button type="submit" className="loginButton btn btn-primary">
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
