import React, { useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useAuth } from "../hooks/useAuth";


const NewProfile = (props) => {
    const [street, setStreet] = useState('');
    const [state, setState] = useState('')
    const [city, setCity] = useState('');
    const [zip, setZipcode] = useState('');
    const [startDate, setStartDate] = useState('');
    const [goalDate, setGoalDate] = useState('');
    // const [goal, setGoal] = useState('')
    const navigate = useNavigate();
    const { CreateNewProfile, user } = useAuth();



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        CreateNewProfile({
        id:user.id,
        startDate,
        goalDate,
        city,
        street,
        zip,
        state,
        })
        navigate('/profile')
        
};

return (
    <div className="auth-form-cont">
        <NavBar />
        < div className="container"> 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label hmtlfor="street">Street</label>
                <input value={street} onChange={(e) => setStreet(e.target.value)}type="text" className="form-control" id="text13" aria-describedby="street"></input>
            </div>
            <div className="form-group">
                <label hmtlfor="city">City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)}type="text" className="form-control" id="text14" aria-describedby="city"></input>
            </div>
            <div className="form-group">
                <label hmtlfor="zipcode">Zip Code</label>
                <input value={zip} onChange={(e) => setZipcode(e.target.value)}type="number" className="form-control" id="text15" aria-describedby="zipcode"></input>
            </div>
            <div className="form-group">
                <label hmtlfor="state">State</label>
                <input value={state} onChange={(e) => setState(e.target.value)}type="text" className="form-control" id="text16" aria-describedby="zipcode"></input>
            </div>
            {/* <div className="form-group col-md-4" >
                <label hmtlfor="state">Goal</label>
                <select id="inputState" class="form-control">
                    <option value={goal} onChange={(e) => setGoal(e.target.value)}type="text" className="form-control" id="text17" aria-describedby="goal">Choose a race...</option> <option>Half Marathon</option> value={goal} onChange={(e) => setGoal(e.target.value)}
                </select>              
            </div> */}
            <div className="form-group col-md-4">
                <label hmtlfor="start date">Start Date</label>
                <input value={startDate} onChange={(e) => setStartDate(e.target.value)}type="date" className="form-control" id="text18" aria-describedby="start date"></input>
            </div>
            <div className="form-group col-md-4">
                <label hmtlfor="goal date">Please select an end date within four months from your start date</label>
                <input value={goalDate} onChange={(e) => setGoalDate(e.target.value)}type="date" className="form-control" id="text19" aria-describedby="Please select an end date within four months from start date"></input>
            </div>
            <button type="submit" className="btn btn-primary">Update Plan</button>
        </form>
        </div>
        <div className="container">
        {/* <button > </button> */}
        </div>        
    </div>
    
)
};


export default NewProfile;
