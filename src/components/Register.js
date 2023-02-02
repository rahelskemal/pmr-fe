import React, { useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useAuth } from "../hooks/useAuth";


const Register = (props) => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('');
    const [state, setState] = useState('')
    const [city, setCity] = useState('');
    const [zip, setZipcode] = useState('');
    const [startDate, setStartDate] = useState('');
    const [goalDate, setGoalDate] = useState('');
    const navigate = useNavigate();
    const { AddUser } = useAuth();


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        AddUser({firstName,
        lastName,
        email,
        password,
        startDate,
        goalDate,
        city,
        street,
        zip,
        state,
        })
        // navigate('/create')
        
    };
    // console.log(props.onFormSwitch)
    return (
        <div className="auth-form-cont">
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label hmtlfor="firstName">First Name</label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)}type="text" className="form-control" id="text" aria-describedby="firstname"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="lastName">Last Name</label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)}type="text" className="form-control" id="text" aria-describedby="lastname"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" className="form-control" placeholder="youremail@gmail.com" id="email" aria-describedby="emailHelp"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="street">Street</label>
                    <input value={street} onChange={(e) => setStreet(e.target.value)}type="text" className="form-control" id="text" aria-describedby="street"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="city">City</label>
                    <input value={city} onChange={(e) => setCity(e.target.value)}type="text" className="form-control" id="text" aria-describedby="city"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="zipcode">Zip Code</label>
                    <input value={zip} onChange={(e) => setZipcode(e.target.value)}type="number" className="form-control" id="text" aria-describedby="zipcode"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="state">State</label>
                    <input value={state} onChange={(e) => setState(e.target.value)}type="text" className="form-control" id="text" aria-describedby="zipcode"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="start date">Start Date</label>
                    <input value={startDate} onChange={(e) => setStartDate(e.target.value)}type="date" className="form-control" id="text" aria-describedby="start date"></input>
                </div>
                <div className="form-group">
                    <label hmtlfor="goal date">Goal Date</label>
                    <input value={goalDate} onChange={(e) => setGoalDate(e.target.value)}type="date" className="form-control" id="text" aria-describedby="goal date"></input>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <button onClick={()=> navigate('/login')}> Already have an account? Log in here.</button>
        </div>
        
    )
}


export default Register;