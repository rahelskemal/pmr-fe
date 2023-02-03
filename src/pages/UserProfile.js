
import NavBar from "../components/NavBar";
import WeeklyGoal from "../components/WeeklyGoal";
import ParkList from "../components/ParkList";

const UserProfile = () => {
    // const { userData, logIn, logOut } = useOutletContext();
    // const data = useOutletContext(); 
    // console.log(data)
    // const { userData, logIn, logOut } = data

    return (
        <div>
            <NavBar />
            <WeeklyGoal />
            <ParkList />
        </div>
    );
};

export default UserProfile;