import { useOutletContext } from 'react-router-dom';
import Login from '../components/Login';
import UserComponent from '../Router';


const LogIn = () => {
    const { userData, logIn, logOut } = useOutletContext();

    return (
        <div>
            <Login data={userData} onlogIn={logIn} onlogOut={logOut} />
        </div>
    );
};

export default LogIn;