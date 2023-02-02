import { useState , useEffect} from 'react';
import { Outlet, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Login from "./components/Login";
// import App from "./App";
import LogIn from './pages/LoginPg';
import Register from './components/Register';
// import UserProfile  from "./pages/UserProfile";
import FourOhFour from "./pages/404";
import Layout from "./components/Layout";
import { AuthProvider } from "./hooks/useAuth";
import axios from 'axios';





const Kurl = "http://127.0.0.1:5000/users"


const MainLayout = () => {
    
    const [userData, setUserData] = useState(" ");
    const [weeklyMilesList, setWeeklyMilesList] = useState([]) 
    const [parkList, setParkList] = useState([])

    // const GetUser = () => {

        useEffect(() => {
            axios
            .get(Kurl)
            .then((response) => {
                const newUsers = response.data.map((user) => {
                    return {
                    id: user.id,
                    firstName: user.first_name,
                    lastName: user.last_name,
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
                });
                setUserData(newUsers);
                })
            .catch((error) => {
                console.log(error);
            });
        }, []);
            console.log(userData)

    const AddUser = (user) => {
        axios
            .post(Kurl, user)
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
        })
            .catch((error) => {
            console.log(error);
        });
        };
    const getWeeklyMiles = (user) => {
        axios
            .get(`${Kurl}/users/${user.id}`)
            .then((response) => {
            setWeeklyMilesList(response.data.weeklyGoal);
            }) 
            .catch((error) => {
            console.log('Error: Couldn\'t get a list of miles', error)
            alert('Couldn\'t get a list of miles')
            });
        };
    const userParkList = (user) => {
        axios
            .get(`${Kurl}/users/${user.id}`)
            .then((response) => {
            setParkList(response.data.parkList);
            }) 
            .catch((error) => {
            console.log('Error: Couldn\'t get a list of parks', error)
            alert('Couldn\'t get a list of parks')
            });
        };    

    return (
        <AuthProvider>
        <Layout>
            <Outlet context={{userData}} />
        </Layout>
        </AuthProvider>
)
};

export const routes = [
    {
        element: <MainLayout />,
        children: [
    
        { 
            element: <FourOhFour />,
            path: "/404",
        },
        // {
        //     element: <UserProfile />,
        //     path: "/profile"
        // },
        { 
            element: <Navigate to="/404" replace />,
            path: "*",
        },
        {
            element: <Dashboard />,
            path: "/",
        },
        {
            element: <LogIn />,
            path: "/login",
        },
        // {
        //     element: <App />,
        //     path: "/login",
        // },
        {
            element: <Register />,
            path: "/register",
        },
        ],
    },
];

export default MainLayout;