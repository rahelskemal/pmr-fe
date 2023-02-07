
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
    return (
        <div className="userprofile">
            <NavBar />
            <h1 className="trainingdates"> You are training from : {formattedStartDate} -  {formattedGoalDate}</h1>
            <WeeklyGoal />
            <h3> Discover Parks Near You </h3>
            <NearbyParks />
            {/* <ParkList /> */}
        </div>
    );
};

export default UserProfile;