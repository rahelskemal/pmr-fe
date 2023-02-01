import React, { useState } from "react";


const Register = (props) => {
    const [email, setEmail] = useState(" ");
    const [pass, setPass] = useState(" ");
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-cont">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input value={email} onChange={(e) => setName(e.targer.value)}type="text" class="form-control" id="text" aria-describedby="fullname"></input>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.targer.value)}type="email" class="form-control" placeholder="youremail@gmail.com" id="email" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.targer.value)}type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <button onClick={()=> props.onFormSwitch('login')}> Already have an account? Log in here.</button>
        </div>
        
    )
}


export default Register;