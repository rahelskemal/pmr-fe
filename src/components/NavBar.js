import React from "react";


const NavBar = () => {
    // const [currentPage, setCurrentPage] = useState('home');
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <a class="navbar-brand" href="/">Plan My Run</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="/dashboard">My Profile</a>
                    <a class="nav-link" href="/create">Create Profile</a>
                </div>
            </div>
        </nav>
    );
}


export default NavBar;
