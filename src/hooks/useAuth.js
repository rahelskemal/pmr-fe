import { useState, useEffect, createContext, useContext} from 'react';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../Utilities';
import { useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';


const Kurl = "http://127.0.0.1:5000/users"
const AuthContext = createContext();

export const AuthProvider = ({ children }) =>
{
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState(null);
    const [weeklyMilesList, setWeeklyMilesList] = useState([]) 
    const [parkList, setParkList] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    useEffect (() => { 
        if (location.pathname !== "/register" && location.pathname !== "/login"){
            const lsUser = getItemFromLocalStorage('user');

            if(lsUser) {
                setUser(lsUser)
                navigate(location.pathname);
            } else {
                navigate("/login");
            }
        } else {
            navigate(location.pathname);
        }
    }, []);

    useEffect(() => {
        axios
        .get(Kurl)
        .then((response) => {
            const newUsers = response.data.map((user) => {
                return convertsnaketocamel(user);
            });
            setUserData(newUsers);
            })
        .catch((error) => {
            console.log(error);
        });
    }, []);
        console.log(userData)

    const convertsnaketocamel = (user) => {
        return {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            password: user.password,
            startDate: user.desired_start_date,
            goalDate: user.goal_date,
            city: user.city,
            street: user.street,
            state: user.state,
            zip: user.zip_code,
            weeklyGoal: user.weekly_goal,
            parkList: user.nearby_parks,
            };
    } 

    const convertCamelToSnake = (user) => {
        return {
            id:user.id,
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            password: user.password,
            desired_start_date: user.startDate,
            goal_date: user.goalDate,
            city: user.city,
            street: user.street,
            state: user.state,
            zip_code: user.zip,
            weekly_goal: user.weeklyGoal,
            nearby_parks: user.parkList
            
        }
    }

    const AddUser = (user) => {
        axios.post(Kurl, convertCamelToSnake(user))
        .then((response) => {
        console.log(response)
        const newUsers = [...userData];
        newUsers.push({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            startDate: "",
            goalDate: "",
            city: "",
            street: "",
            zip: "",
            state: "",
            weeklyGoal: "",
            parkList: "",
            ...user,
        });
        setUserData(newUsers);
        setWeeklyMilesList(newUsers.weeklyGoal)
        setParkList(newUsers.parkList)
        login(user)
    })
        .catch((error) => {
        console.log(error);
    });
    };

    const login = ( user ) => {
        // API CALL
            // set up another function to check login (login component calls this)
        setItemInLocalStorage('user', user );
        setUser(user);
        navigate("/profile");
    }

    const logout = () => {
        setUser(null)
        setItemInLocalStorage('user', null)
        navigate("/login")
    };

    const value = {
        user,
        login,
        logout,
        AddUser,
        userData
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};