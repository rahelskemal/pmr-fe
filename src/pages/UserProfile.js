
import NavBar from "../components/NavBar";
import WeeklyGoal from "../components/WeeklyGoal";
import ParkList from "../components/ParkList";
import NearbyParks from "../components/NearbyParks";
import { useAuth } from '../hooks/useAuth';


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
        <div>
            <NavBar />
            <h1> You are training from : {formattedStartDate} -  {formattedGoalDate}</h1>
            <WeeklyGoal />
            <NearbyParks />
            {/* <ParkList /> */}
        </div>
    );
};

export default UserProfile;