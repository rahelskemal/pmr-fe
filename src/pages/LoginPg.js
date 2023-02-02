import { useOutletContext } from 'react-router-dom';
import Login from '../components/Login';
// import UserComponent from '../Router';


const LogIn = () => {
    // const { userData, logIn, logOut } = useOutletContext();
    const data = useOutletContext(); 
    console.log(data)
    const { userData, logIn, logOut } = data

    return (
        <div>
            <Login data={userData} onlogIn={logIn} onlogOut={logOut} />
        </div>
    );
};

export default LogIn;