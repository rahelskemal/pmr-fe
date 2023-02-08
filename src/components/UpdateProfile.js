import React, { useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useAuth } from "../hooks/useAuth";
import "./updateProfile.css";


const UpdateProfilePg = (props) => {
    const [street, setStreet] = useState('');
    const [state, setState] = useState('')
    const [city, setCity] = useState('');
    const [zip, setZipcode] = useState('');
    const [startDate, setStartDate] = useState('');
    const [goalDate, setGoalDate] = useState('');
    // const [goal, setGoal] = useState('')
    const navigate = useNavigate();
    const { UpdateProfile, user, updateData } = useAuth();



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);

        const data = {
            startDate,
            goalDate,
            street,
            city,
            state,
            zip
        }

        UpdateProfile({
        id:user.id,
        data
        })
        console.log(city)
        navigate('/profile')
        
};

return (
    <div>
        <div>
            <NavBar />
        </div>
    <div className="pagecolor">
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <div className="auth-form-cont">
                        <div className="container"> 
                <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="street" className="text-light">Street</label>
                <input value={street} onChange={(e) => setStreet(e.target.value)}type="text" className="form-control" id="text13" aria-describedby="street"></input>
            </div>
            <div className="form-group">
                <label htmlFor="city" className="text-light">City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)}type="text" className="form-control" id="text14" aria-describedby="city"></input>
            </div>
            <div className="form-group">
                <label htmlFor="zipcode" className="text-light">Zip Code</label>
                <input value={zip} onChange={(e) => setZipcode(e.target.value)}type="number" className="form-control" id="text15" aria-describedby="zipcode"></input>
            </div>
            <div className="form-group">
                <label htmlFor="state" className="text-light">State</label>
                <input value={state} onChange={(e) => setState(e.target.value)}type="text" className="form-control" id="text16" aria-describedby="zipcode"></input>
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="start date" className="text-light">Start Date</label>
                <input value={startDate} onChange={(e) => setStartDate(e.target.value)}type="date" className="form-control" id="text18" aria-describedby="start date"></input>
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="goal date" className="text-light">Please select an end date within four months from your start date</label>
                <input value={goalDate} onChange={(e) => setGoalDate(e.target.value)}type="date" className="form-control" id="text19" aria-describedby="Please select an end date within four months from start date"></input>
            </div>
                <button type="submit" className="btn btn-primary">Update Plan</button>
        </form>
        </div>
        <div className="container">
        {/* <button > </button> */}
        </div>        
    </div>
</div>
</div>
</div>
</div>
</div>
    
)
};


export default UpdateProfilePg;
