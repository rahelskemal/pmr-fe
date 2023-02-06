//if user's first time signing in then they fill out the form otherwise, they see their results here
//layout is rendered here + userform + userprofile 

import NavBar from "../components/NavBar";
import './Dashboard.css';
import { useNavigate } from "react-router-dom";



const Dashboard = () => {
    const navigate = useNavigate();

    
    return (
        <div className="wholepage">
        <secion className="fullpage">
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
            <div className ="headtext"> 
                {/* <h2> Created for new runners </h2> */}
                <h2>Taking the thinking out so you can focus on</h2>
                <h2>RUNNING</h2>
            <div>
                <button  type="button" className="btn btn-info" onClick={()=> navigate('/register')}> Create a profile today! </button>
            </div>
        </div>
        </div>
        
        <footer> 
            <span className="foottext"> Made with care by Rahel Kemal C18 </span>
        </footer>

        </secion>
        </div>
    )
}


export default Dashboard;