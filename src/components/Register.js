import React, { useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";
import NavBar from "./NavBar";


const Register = (props) => {
    const [email, setEmail] = useState(" ");
    const [pass, setPass] = useState(" ");
    const [name, setName] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };
    console.log(props.onFormSwitch)
    return (
        <div className="auth-form-cont">
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label hmtlfor="fullName">Full Name</label>
                    <input value={email} onChange={(e) => setName(e.targer.value)}type="text" className="form-control" id="text" aria-describedby="fullname"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.targer.value)}type="email" className="form-control" placeholder="youremail@gmail.com" id="email" aria-describedby="emailHelp"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.targer.value)}type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <button onClick={()=> navigate('/login')}> Already have an account? Log in here.</button>
        </div>
        
    )
}


export default Register;