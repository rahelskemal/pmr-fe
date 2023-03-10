
import { Outlet, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LogIn from './pages/LoginPg';
import Register from './components/Register';
import UserProfile  from "./pages/UserProfile";
import FourOhFour from "./pages/404";
import Layout from "./components/Layout";
// import NewRegister from './pages/CreateNewUser'
import { AuthProvider } from "./hooks/useAuth";
import UpdateProfilePg from "./components/UpdateProfile";




const MainLayout = () => {


    return (
        <AuthProvider>
        <Layout>
            <Outlet  />
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
            {
                element: <UserProfile />,
                path: "/profile"
            },
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
            {
                element: <UpdateProfilePg />,
                path: "/create",
            },
            {
                element: <Register />,
                path: "/register",
            },
        ],
    },
];

export default MainLayout;