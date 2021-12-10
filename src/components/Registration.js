import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../css/Registration.css"
export default function Registration({ EventName, description, helpMail, helpContact }) {



    const initial = {
        name: "",
        email: "",
        password: "",
        cpassword: "",
        contact: ""
    };
    const [formValues, setFormValues] = useState(initial);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues, [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {}
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!values.email) {
            errors.email = "Email Required";
        }
        else if (!regex.test(values.email)) {
            errors.email = "Enter Valid Email";
        }
        else if (values.email.search("@pvgcoet.ac.in") == -1)
        {
            errors.email = "Email not registered with PVG COET"
        }
        if (!values.password) {
            errors.password = "Password Required";
        }
        if (!values.name) {
            errors.name = "Name Required";
        }
        if (!values.cpassword) {
            errors.cpassword = "Confirm Password";
        }
        else if (values.password != values.cpassword) {
            errors.cpassword = "Password is not matching with above password";
        }
        if (!values.contact) {
            errors.contact = "Contact Required";
        }
        else if (values.contact.length != 10) {
            errors.contact = "Contact must be 10 digits";
        }
        return errors;
    };
    return (
        <div className='registration-container'>
            {Object.keys(formErrors).length === 0 && isSubmit ? window.open("Home", "_self") : console.log("No")}
            {/* <div className='registration-content-left'>
              <img src={login} className="registration-img" alt="login" />
          </div> */}
            <div >
                <form className="registration" onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <span className="registration-input-login">
                        Already have an account?   <Link to = "/signin">Login here</Link>
                    </span>
                    {/* name  */}
                    <div className="registration-inputs">
                        <label htmlFor="name" className="registration-label">Name</label>
                        <input type="text" name="name" id="name" className="registration-input" placeholder="Enter Full Name" value={formValues.name} onChange={handleChange} />
                        {<p>{formErrors.name}</p>}
                    </div>
                    {/* email  */}
                    <div className="registration-inputs">
                        <label htmlFor="email" className="registration-label">Email</label>
                        <input type="email" name="email" id="email" className="registration-input" placeholder="Enter Email" value={formValues.email} onChange={handleChange} />
                        {<p>{formErrors.email}</p>}
                    </div>
                    {/* contact */}
                    <div className="registration-inputs">
                        <label htmlFor="contact" className="registration-label">Contact Number</label>
                        <input type="number" maxLength="10" minLength="10" name="contact" id="contact" className="registration-input" placeholder="Enter Contact Number" value={formValues.contact} onChange={handleChange} />
                        {<p>{formErrors.contact}</p>}
                    </div>
                    {/* branch  */}
                    <div className="registration-inputs">
                        <label htmlFor="branch" className="registration-label">Branch</label>
                        <select id="branch" name="branch" className="registration-input">
                            <option value="Computer">Computer</option>
                            <option value="IT">IT</option>
                            <option value="Electrical">Electrical</option>
                            <option value="ENTC">ENTC</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Printing">Printing</option>
                        </select>
                    </div>
                    {/* yea */}
                    <div className="registration-inputs">
                        <label htmlFor="branch" className="registration-label">Year</label>
                        <select id="year" name="year" className="registration-input">
                            <option value="1">FE</option>
                            <option value="2">SE</option>
                            <option value="3">TE</option>
                            <option value="4">BE</option>
                        </select>
                    </div>
                    <div className="registration-inputs">
                        <label htmlFor="password" className="registration-label">Password</label>
                        <input type="password" name="password" id="password" className="registration-input" placeholder="Enter Password" value={formValues.password} onChange={handleChange} />
                        <p>{formErrors.password}</p>
                    </div>
                    <div className="registration-inputs">
                        <label htmlFor="cpassword" className="registration-label">Confirm Password</label>
                        <input type="password" name="cpassword" id="cpassword" className="registration-input" placeholder="Confirm Password" value={formValues.cpassword} onChange={handleChange} />
                        <p>{formErrors.cpassword}</p>
                    </div>
                    <button className="registration-input-btn" type="submit">Sign Up</button>
                    
                </form>
            </div>
        </div>



    )
}
