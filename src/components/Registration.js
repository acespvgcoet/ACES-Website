import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import "../css/Registration.css"
import * as Yup from 'yup';
import { useStateValue } from './StateProvider';
import db, { auth } from './firebase';
import { actionTypes } from './reducer';
export default function Registration({ EventName, description, helpMail, helpContact }) {

    const history = useHistory();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const [{ alertMessage }, dispatch] = useStateValue();
    const addDataToDB = async (values) => {

        await db.collection("users").doc(values.email.toString()).set({
            "email": values.email,
            "name": values.name,
            "mobile": values.contact,
            "year": "FE",
            "branch": "Computer",

        }).then(() => {
            console.log("Document successfully written!");
        })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }
    const formik = useFormik({

        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
            contact: ""
        },

        validationSchema: Yup.object({

            name: Yup.string()
                .min(3, 'Must be 3 character or more')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().matches('@pvgcoet.ac.in', "Email Not Registered with PVG COET").email('Invalid email address').required('Required'),
            contact: Yup.string().matches(phoneRegExp, "Phone number is not valid").min(10, "10 digit mobile number required").max(10, "10 digit mobile number required").required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters or more')
                .required('Required'),
            cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
        }),

        onSubmit: values => {

            auth.createUserWithEmailAndPassword(values.email, values.password).then((userCredential) => {
                // send verification mail.

                dispatch({
                    type: actionTypes.SET_ALERTMESSAGE,
                    alertMessage: null,
                })
                if (!userCredential.user.emailVerified) {

                    // userCredential.user.displayName = values.firstname +" "+ values?.lastname;
                    userCredential.user.updateProfile({
                        displayName: values.name,
                    })
                    userCredential.user.sendEmailVerification();
                    auth.signOut();
                    dispatch({
                        type: actionTypes.SET_ALERTMESSAGE,
                        alertMessage: "Verification Email is Sent",
                    })


                }

            })
                .catch((error) => {
                    dispatch({
                        type: actionTypes.SET_ALERTMESSAGE,
                        alertMessage: error.message,
                    })

                });
            db.collection("users").doc(values.email.toString()).get().then((doc) => {
                if (!doc.exists) {
                    addDataToDB(values);
                } else {

                }
            }).catch((error) => {

            }).then(() => {
                history.push('/signin')
            }
            )

        },

    });


    return (
        <div className='registration-container'>

            <div >
                <form className="registration" onSubmit={formik.handleSubmit}>
                    <h1>Sign Up</h1>
                    <span className="registration-input-login">
                        Already have an account?   <Link to="/signin">Login here</Link>
                    </span>
                    {/* name  */}
                    <div className="registration-inputs">
                        <label htmlFor="name" className="registration-label">Name</label>
                        <input type="text" name="name" id="name" className="registration-input" placeholder="Enter Full Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />
                        {formik.touched.name && formik.errors.name ? (<p>{formik.errors.name}</p>) : null}
                    </div>
                    {/* email  */}
                    <div className="registration-inputs">
                        <label htmlFor="email" className="registration-label">Email</label>
                        <input type="email" name="email" id="email" className="registration-input" placeholder="Enter Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? (<p>{formik.errors.email}</p>) : null}
                    </div>
                    {/* contact */}
                    <div className="registration-inputs">
                        <label htmlFor="contact" className="registration-label">Contact Number</label>
                        <input type="number" maxLength="10" minLength="10" name="contact" id="contact" className="registration-input" placeholder="Enter Contact Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.contact} />
                        {formik.touched.contact && formik.errors.contact ? (<p>{formik.errors.contact}</p>) : null}
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
                    {/* year */}
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
                        <input type="password" name="password" id="password" className="registration-input" placeholder="Enter Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                        {formik.touched.password && formik.errors.password ? (<p>{formik.errors.password}</p>) : null}
                    </div>
                    <div className="registration-inputs">
                        <label htmlFor="cpassword" className="registration-label">Confirm Password</label>
                        <input type="password" name="cpassword" id="cpassword" className="registration-input" placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cpassword} />
                        {formik.touched.cpassword && formik.errors.cpassword ? (<p>{formik.errors.cpassword}</p>) : null}
                    </div>
                    <button className="registration-input-btn" type="submit">Sign Up</button>

                </form>
            </div>
        </div>



    )
}


/*


    // const initialValues = {

    // };
    // const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({
    //         ...formValues, [name]: value
    //     });
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormErrors(validate(formValues));
    //     setIsSubmit(true);
    // };
    // useEffect(() => {
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues);
    //     }
    // }, [formErrors])
    // const validate = (values) => {
    //     const errors = {}
    //     const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    //     if (!values.email) {
    //         errors.email = "Email Required";
    //     }
    //     else if (!regex.test(values.email)) {
    //         errors.email = "Enter Valid Email";
    //     }
    //     else if (values.email.search("@pvgcoet.ac.in") == -1)
    //     {
    //         errors.email = "Email not registered with PVG COET"
    //     }
    //     if (!values.password) {
    //         errors.password = "Password Required";
    //     }
    //     if (!values.name) {
    //         errors.name = "Name Required";
    //     }
    //     if (!values.cpassword) {
    //         errors.cpassword = "Confirm Password";
    //     }
    //     else if (values.password != values.cpassword) {
    //         errors.cpassword = "Password is not matching with above password";
    //     }
    //     if (!values.contact) {
    //         errors.contact = "Contact Required";
    //     }
    //     else if (values.contact.length != 10) {
    //         errors.contact = "Contact must be 10 digits";
    //     }
    //     return errors;
    // };

*/