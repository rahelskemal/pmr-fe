import { Outlet, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import App from "./App";
// import UserProfile  from "./pages/UserProfile";
import FourOhFour from "./pages/404";
import Layout from "./components/Layout";
import { AuthProvider } from "./hooks/useAuth";


const MainLayout = () => (
    <AuthProvider>
        <Layout>
            <Outlet />
        </Layout>
    </AuthProvider>
)

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
            element: <Login />,
            path: "/login",
        },
        {
            element: <App />,
            path: "/create",
        },
        
        ],
    },
];