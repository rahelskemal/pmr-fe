import React from "react";
import { useAuth } from '../hooks/useAuth';




const NavBar = () => {
    // const [currentPage, setCurrentPage] = useState('home');
    const handleClick = () => {
    };
    const { logout, user } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Plan My Run</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="/profile">My Plan</a>
                    <a className="nav-link" href="/create">Update Plan</a>
                    {user && <button onClick={logout}>Log Out</button>}
                </div>
            </div>
        </nav>
    );
}


export default NavBar;
