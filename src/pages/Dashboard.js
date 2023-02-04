//if user's first time signing in then they fill out the form otherwise, they see their results here
//layout is rendered here + userform + userprofile 

import NavBar from "../components/NavBar";
// import './Dashboard.css'


const Dashboard = () => {
    return (
        <secion>
        <div className="jumbotron jumbotron-fluid">
            <div>
                <NavBar />
            </div>
            <div className="container">
                <h1 className="display-4">Welcome to Plan My Run</h1>
                <p className="lead">A site created to help you train for your first long run!</p>
            </div>
        </div>
        <div>
            <h2 className ="headtext"> Created for New Runners who are ready to embark on their first LONG run!</h2>
        </div>
        </secion>
    )
}


export default Dashboard;