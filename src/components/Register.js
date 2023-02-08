import React, { useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useAuth } from "../hooks/useAuth";
import "./Register.css";

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
    const [goal, setGoal] = useState('')
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
        goal
        })

        
    };

    return (
        <div>
        <div>
            <NavBar />
        </div>
        <div className="formbody">
            <div className="auth-form-cont">
                < div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-10 col-md-8 col-lg-6"> 
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label hmtlfor="firstName" className="text-light">First Name</label>
                                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)}type="text" className="form-control" id="text1" aria-describedby="firstname"></input>
                                </div>
                                <div className="form-group">
                                    <label hmtlfor="lastName" className="text-light" >Last Name</label>
                                    <input value={lastName} onChange={(e) => setLastName(e.target.value)}type="text" className="form-control" id="text2" aria-describedby="lastname"></input>
                                </div>
                                <div className="form-group">
                                    <label hmtlfor="email" className="text-light">Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" className="form-control" placeholder="youremail@gmail.com" id="email" aria-describedby="emailHelp"></input>
                                </div>
                                <div className="form-group">
                                    <label hmtlfor="password" className="text-light">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" className="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <div className="form-group">
                                    <label hmtlfor="street" className="text-light">Street</label>
                                    <input value={street} onChange={(e) => setStreet(e.target.value)}type="text" className="form-control" id="text3" aria-describedby="street"></input>
                                </div>
                                <div className="form-group">
                                    <label hmtlfor="city" className="text-light">City</label>
                                    <input value={city} onChange={(e) => setCity(e.target.value)}type="text" className="form-control" id="text4" aria-describedby="city"></input>
                                </div>
                                <div className="form-group">
                                    <label hmtlfor="zipcode" className="text-light">Zip Code</label>
                                    <input value={zip} onChange={(e) => setZipcode(e.target.value)}type="number" className="form-control" id="text5" aria-describedby="zipcode"></input>
                                </div>
                                <div className="form-group">
                                    <label hmtlfor="state" className="text-light">State</label>
                                    <input value={state} onChange={(e) => setState(e.target.value)}type="text" className="form-control" id="text6" aria-describedby="zipcode"></input>
                                </div>
                                <div className="form-group col-md-4" >
                                    <label hmtlfor="state" className="text-light">Goal</label>
                                    <select id="inputState" class="form-control">
                                        <option value={goal} onChange={(e) => setGoal(e.target.value)}type="text" className="form-control" id="text7" aria-describedby="goal">Choose a race...</option> <option>Half Marathon</option> value={goal} onChange={(e) => setGoal(e.target.value)}
                                    </select>              
                                </div>
                                <div className="form-group col-md-4">
                                    <label hmtlfor="start date" className="text-light">Start Date</label>
                                    <input value={startDate} onChange={(e) => setStartDate(e.target.value)}type="date" className="form-control" id="text8" aria-describedby="start date"></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label hmtlfor="goal date" className="text-light">Please select an end date within four months from your start date</label>
                                    <input value={goalDate} onChange={(e) => setGoalDate(e.target.value)}type="date" className="form-control" id="text9" aria-describedby="Please select an end date within four months from start date"></input>
                                </div>
                                <button type="submit" className="btn btn-light">Register</button>
                            </form>
                        </div>
                        </div>
                    <div className="loginbutton">
                <button className= "actualbutton2" onClick={()=> navigate('/login')}> Already have an account? Log in here.</button>
            </div>        
        </div>
    </div>
    </div>
</div>
    )
}


export default Register;