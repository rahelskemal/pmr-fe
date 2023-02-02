import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
// import './App.css';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => { 
    console.log(formName)
    setCurrentForm(formName);
  };


  return (
    <div className="App">
        <NavBar />
        {
        currentForm === "login" ?  <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
        }
    </div>
    
  );
}






//   return (
//     <section className="App">
//         <NavBar />
//         <div class="container"> 
//           <h1>
//             Create a New Profile!
//           </h1>
//           <div>
//             currentForm === login ?  <Login /> : <NewUserForm />
//           </div>
//         </div>
//     </section>
//   );
// }

export default App;
