import { useState, useEffect } from 'react'
import '../css/Login.css'
import login from '../assets/images/login.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import db, { auth } from './firebase';
import { actionTypes } from './reducer';
function Login() {
    const [{ user, alertMessage }, dispatch] = useStateValue();
    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: Yup.object({



            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters or more')

                .required('Required'),


        }),

        onSubmit: values => {
            auth.signInWithEmailAndPassword(values.email, values.password).then((userCredential) => {
                // Signed in
                dispatch({
                    type: actionTypes.SET_ALERTMESSAGE,
                    alertMessage: null,
                })
                if (userCredential.user.emailVerified) {
                    console.log(userCredential.user);
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: userCredential.user,
                    });
                }

                else {
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: null,
                    });
                    auth.signOut()
                    dispatch({
                        type: actionTypes.SET_ALERTMESSAGE,
                        alertMessage: "Email not Verified",
                    })
                    // alert("Email not Verified")


                }
                // ...
            })
                .catch((error) => {
                    console.log(error);
                    dispatch({
                        type: actionTypes.SET_ALERTMESSAGE,
                        alertMessage: error.message,
                    })
                });

        },

    });
    return (
        <div className='login-container'>
            <div className='login-content-left'>
                <img src={login} className="login-img" alt="login" />
            </div>
            <div className="login-content-right">
                <form className="login" onSubmit={formik.handleSubmit}>
                    <h1>Login</h1>
                    <div className="login-inputs">
                        <label htmlFor="email" className="login-label">Email</label>
                        <input type="email" name="email" id="email" className="login-input" placeholder="Enter Email"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                        {formik.touched.email && formik.errors.email ? (<p>{formik.errors.email}</p>) : null}
                    </div>
                    <div className="login-inputs">
                        <label htmlFor="password" className="login-label">Password</label>
                        <input type="password" name="password" id="password" className="login-input" placeholder="Enter Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                        {formik.touched.password && formik.errors.password ? (<p>{formik.errors.password}</p>) : null}
                    </div>
                    <button className="login-input-btn" type="submit">Login</button>
                    <span className="login-input-login">
                        {alertMessage}
                    </span>
                    <span className="login-input-login">
                        Don't have account?  <Link to = "signup">Create One</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}
export default Login


/*
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

*/