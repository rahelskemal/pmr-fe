import { useState, useEffect, createContext, useContext} from 'react';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../Utilities';
import { useLocation, useNavigate } from "react-router-dom"

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>
{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect (() => {
        const lsUser = getItemFromLocalStorage('user');

        if(lsUser) {
            setUser(lsUser)
            navigate(location.pathname);
        } else {
            navigate("/login");
        }
    }, []);

    const login = () => {
        setItemInLocalStorage('user',  );
        setUser();
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
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};