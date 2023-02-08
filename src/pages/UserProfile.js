
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import WeeklyGoal from "../components/WeeklyGoal";
import ParkList from "../components/ParkList";
import NearbyParks from "../components/NearbyParks";
import { useAuth } from '../hooks/useAuth';
import "./UserProfile.css";



const UserProfile = () => {
    
    const { user } = useAuth();
    
    const startDate = user?.startDate;
    const options = { month: "long", day: "numberic", year: "numeric"}
    const startDatenew = new Date(startDate);
    const formattedStartDate = startDatenew.toDateString(options)

    const goalDate = user?.goalDate;
    const goalDatenew = new Date(goalDate);
    const formattedGoalDate = goalDatenew.toDateString()
    const [showPlan, setShowPlan] = useState(false);

    const handleClick = (e) => { 
        e.preventDefault();
        setShowPlan(!showPlan) 
    }


    return (
        <div className="userprofile">
            <NavBar />
            <div className="bodycontainer">
            <h1 className="Welcome"> A plan for: {user?.firstName} </h1>
            <h3 className="trainingdates"> Training Timeline : {formattedStartDate} -  {formattedGoalDate}</h3>
                <div className="body1">
                    <div className="trainingtext">
                    <button className="viewplan" onClick={handleClick}> View my plan </button> 
                    { showPlan ? (<WeeklyGoal/> ): null}
                    </div>
                    {/* <WeeklyGoal /> */}
                    </div>
                
                <div className="body2">
                    <div className="parktext">
                    
                    </div>
                    <h3 className="parks"> Discover Parks Near You </h3>
                    <NearbyParks />
                </div>
            </div>
            
        </div>
    );
};

export default UserProfile;