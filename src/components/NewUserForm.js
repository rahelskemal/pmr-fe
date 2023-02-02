import React, { useState } from "react";
import TableDatePicker from "./TableDatePicker";
import axios from 'axios';



const NewUserForm = (props) => {
    const [formFields, setFormFields] =
    useState({
        email: "",
        password:"**********",
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zip:""
    });

    const handleEmailChange = (event) =>
    {
        setFormFields ({...formFields,
            email:event.target.value
            });
    };



    const handlePassChange = (event) =>
    {
        setFormFields ({...formFields,
            password:event.target.value
            });
    };

    const handleNameChange = (event) => 
    {
        setFormFields ({...formFields,
        firstName:event.target.value
        });
    };

    const handleLastNameChange = (event) => 
    {
        setFormFields ({...formFields,
        lastName: event.target.value});
    };

    const handleStreetChange = (event) => 
    {
        setFormFields ({...formFields,
        street: event.target.value});
    };    

    const handleCityChange = (event) => 
    {
        setFormFields ({...formFields,
        city: event.target.value});
    };

    const handleStateChange = (event) => 
    {
        setFormFields ({...formFields,
        state: event.target.value});
    };

    const handleZipChange = (event) => 
    {
        setFormFields ({...formFields,
        zip: event.target.value});
    };
        
    const Kurl = "http://127.0.0.1:5000/"

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${Kurl}/users`);

        } catch (error) {
            console.error(error);
        }
    
        
        // props.addUser(formFields.firstName,
        //             formFields.lastName,
        //             formFields.street,
        //             formFields.city,
        //             formFields.state,
        //             formFields.zip);

        // instead of clearing the form field, redirect to login and tell them they've created a profile or provide them a link
        setFormFields({
            firstName: "",
            lastName: "",
            street: "",
            city: "",
            state: "",
            zip:""
        });
    };

    return (
        <section className="new-user-form_container">
            <div className="container">
            <form className='new-board-form__form' onSubmit={handleFormSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">email</label>
                        <input type="email" value={formFields.email} onChange={handleEmailChange} className="form-control" id="inputemail4" required></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputpassword4">password</label>
                        <input type="password" value={formFields.password} onChange={handlePassChange} placeholder="**********" className="form-control" id="inputfirstNamel4" required></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputname4">First Name</label>
                        <input type="text" value={formFields.firstName} onChange={handleNameChange} className="form-control" id="inputfirstNamel4" required></input>
                    </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputlastname4">Last Name</label>
                    <input type="text" value={formFields.lastName} onChange={handleLastNameChange} className="form-control" id="inputlastName4" required></input>
                    </div>
                </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" value={formFields.street} onChange={handleStreetChange} className="form-control" id="inputAddress" placeholder="1234 Main St" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" value={formFields.city} onChange={handleCityChange}className="form-control" id="inputCity" required></input>
                    </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" value={formFields.state} onChange={handleStateChange} className="form-control" required>
                        <option selected>Choose...</option>
                        <option>Washington</option>
                        <option>California</option>
                    </select>
                    </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" value={formFields.zip} onChange={handleZipChange} className="form-control" id="inputZip" required></input>
                        </div>
                    </div>
                    <div>
                        <h4> Pick a start and end date </h4>
                        < TableDatePicker /> 
                    </div>
                    <div>
                    <button onClick={()=> props.onFormSwitch()} type="submit" className="btn btn-primary">Create Profile</button>
                    </div>
                    </form>
                    </div>
                
            {/* <h2>Create a New Profile</h2>
            <form className="new-user-form__form" onSubmit={handleFormSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                name="fristName"
                type="text"
                value={formFields.firstName}
                onChange={handleInfoChange}
                required
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                name="lastName"
                type="text"
                value={formFields.lastName}
                onChange={handleInfoChange}
                required
                />
                <label htmlFor="street">Street Address</label>
                <input
                name="street"
                type="text"
                value={formFields.street}
                onChange={handleInfoChange}
                required
                />
                <label htmlFor="city">City</label>
                <input
                name="city"
                type="text"
                value={formFields.city}
                onChange={handleInfoChange}
                required
                />
                <label htmlFor="state">State Name</label>
                <input
                name="state"
                type="text"
                value={formFields.state}
                onChange={handleInfoChange}
                required
                />
                <button className="new-user-form__submit" type="submit">
                    Submit
                </button> */}
            {/* </form> */}
    </section>
);
};

export default NewUserForm;


