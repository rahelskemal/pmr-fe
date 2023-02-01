import React, { useState } from "react";


const Login = (props) => {
    const [email, setEmail] = useState(" ");
    const [pass, setPass] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
                <button type="submit" class="btn btn-primary">Log In</button>
            </form>
            <button onClick={()=> props.onFormSwitch('register')}> Don't have an account? Register here. </button>
        </div>
        
    )
}

{/* <form>
  <div class="form-group">
    <label for="InputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}

export default Login;