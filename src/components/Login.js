import React, { useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
// import { useAuth } from '../hooks/useAuth';
// import UserComponent from "../Router";




const Login = (props) => {
    const [email, setEmail] = useState(" ");
    const [password, setPass] = useState(" ");
    const navigate = useNavigate(); 

    // const { login } = useAuth(); 


    const handleSubmit = (e) => {
        e.preventDefault();
        let authUser = false;
        // console.log(props.data)
        for (let user of props.data) {
            if (user.email === email.email && 
                user.password === password.password
                ) { 
                    authUser = true;
                    navigate("/profile");
                    break;    
                }
            }
            if (!authUser) {
                navigate('/register')
            }
        };

    return (
        <div>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" className="form-control" placeholder="youremail@gmail.com" id="email" aria-describedby="emailHelp"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPass(e.target.value)}type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
            <button onClick={() => navigate('/register')}> 
            Don't have an account? Register here. 
            </button>
        </div>
        
    )
};


export default Login;