import React, { useState } from "react";
import { useAuth } from '../hooks/useAuth';



const Login = (props) => {
    const [email, setEmail] = useState(" ");
    const [pass, setPass] = useState(" ");

    const { login } = useAuth(); 


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.targer.value)}type="email" class="form-control" placeholder="youremail@gmail.com" id="email" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.targer.value)}type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <button onClick={login} type="submit" class="btn btn-primary">Log In</button>
            </form>
            <button onClick={()=> props.onFormSwitch('register')}> Don't have an account? Register here. </button>
        </div>
        
    )
}


export default Login;