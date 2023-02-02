import React, { useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
// import { useAuth } from '../hooks/useAuth';
// import UserComponent from "../Router";



const Login = (props) => {
    const [email, setEmail] = useState(" ");
    const [pass, setPass] = useState(" ");
    const navigate = useNavigate(); 

    // const { login } = useAuth(); 


    const handleSubmit = (e) => {
        e.preventDefault();
        let authUser = false;
        for (let user of props.data) {
            console.log(props.data)
            if (user.email === email.email && 
                user.pass === pass.pass
                ) { 
                    authUser = true;
                    Navigate("/profile");
                    break;    
                }
            }
            if (!authUser) {
                Navigate('/register')
            }
        };

    return (
        <div>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.targer.value)}type="email" class="form-control" placeholder="youremail@gmail.com" id="email" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.targer.value)}type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" class="btn btn-primary">Log In</button>
            </form>
            <button onClick={() => navigate('/register')}> 
            Don't have an account? Register here. 
            </button>
        </div>
        
    )
};


export default Login;