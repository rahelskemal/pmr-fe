import React, { useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useAuth } from '../hooks/useAuth';
// import UserComponent from "../Router";
import axios from "axios";

const Kurl = "https://cors-anywhere.herokuapp.com/https://planmyrun.herokuapp.com/users"

const checkEmailPassword = async (email, password) => {
    try {
        const response = await axios.post(Kurl, {email, password});
        return response.data;
    }   catch(error) {
        console.error(error);
    }
};



const Login = (props) => {
    const [email, setEmail] = useState(" ");
    const [password, setPass] = useState(" ");
    const navigate = useNavigate(); 
    const [isEmailPasswordValid, setIsEmailPasswordValid] = useState(false);
    const { login , userData } = useAuth();
    
    // const { login } = useAuth(); 

// MAKE AN API CALL TO CHECK IF THE UN AND PASS MATCHES THE CURRENT ONE 
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const result = await checkEmailPassword(email, password);
        if (result.isValid) {
        setIsEmailPasswordValid(true);

        login(userData)
        navigate('/profile')
        }
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        let authUser = false;
        // console.log(props.data)
        for (let user of userData) {
            if (user.email === email && 
                user.password === password) { 
            
                authUser = true;
                login(user)
                navigate('/profile')
                
                break;    
            }
        };
        if (!authUser) {
            navigate('/register')
        }
    };

    return (
        <div>
            <NavBar />
            <div className="container">
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
        </div>
        
    )
};


export default Login;