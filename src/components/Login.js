import { useState, useEffect } from 'react'
import '../css/Login.css'
import login from '../assets/images/login.png';
import { Link } from 'react-router-dom';

function Login() {
    const initial = {
        email: "",
        password: "",
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
        if (!values.password) {
            errors.password = "Password Required";
        }
        return errors;
    };
    return (
        <div className='login-container'>
            {Object.keys(formErrors).length === 0 && isSubmit ? window.open("Home","_self"): console.log("No")}
            <div className='login-content-left'>
                <img src={login} className="login-img" alt="login" />
            </div>
            <div className="login-content-right">
                <form className="login" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="login-inputs">
                        <label htmlFor="email" className="login-label">Email</label>
                        <input type="email" name="email" id="email" className="login-input" placeholder="Enter Email" value={formValues.email} onChange={handleChange} />
                        { <p>{formErrors.email}</p> }
                    </div>
                    <div className="login-inputs">
                        <label htmlFor="password" className="login-label">Password</label>
                        <input type="password" name="password" id="password" className="login-input" placeholder="Enter Password" value={formValues.password} onChange={handleChange} />
                        <p>{formErrors.password}</p>
                    </div>
                    <button className="login-input-btn" type="submit">Login</button>
                    <span className="login-input-login">
                        Don't have account?  <Link to = "signup">Create One</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}
export default Login