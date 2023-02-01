import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import App from "./App";
import FourOhFour from "./pages/404";


export const routes = [
    { 
        element: <FourOhFour />,
        path: "/404",
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
        element: <Login />,
        path: "/login",
    },
    {
        element: <App />,
        path: "/create",
    },
    
];