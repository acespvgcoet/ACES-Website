import React from 'react'
import { useState, useEffect } from 'react'
import "../css/Registration.css"
export default function Registration({EventName,description,helpMail,helpContact}) {

   
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 ">
    //   <div className="my-5 flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
    //     <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Sign Up</div>
    //     <hr/>
    //     <div className="mt-2">
    //       <form action="/">
    //         <div className="flex flex-col mb-6">
    //           <label htmlFor="name" minLength="1" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Full Name</label>
    //           <div className="relative">
    //             <input required id="name" type="text" name="name"  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Full Name" />
    //           </div>
    //         </div>

    //         <div className="flex flex-col mb-6">
    //           <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
    //           <div className="relative">
    //             <input required id="email" type="email" name="email"   className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
    //           </div>
    //         </div>

    //         {/* Contact NO. */}
    //         <div className="flex flex-col mb-6">
    //           <label htmlFor="contact" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Contact Number</label>
    //           <div className="relative">
    //             <input required id="contact" type="tel" minLength="10"  maxLength="10" name="contact" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Contact Number" />
    //           </div>
    //         </div>

    //         {/* branch */}
    //         <div className="flex flex-col mb-6">
    //           <label htmlFor="branch" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Branch</label>
    //           <div className="relative" >
    //           <select id="branch" name="branch" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
    //               <option value="Computer">Computer</option>
    //               <option value="IT">IT</option>
    //               <option value="Electrical">Electrical</option>
    //               <option value="ENTC">ENTC</option>
    //               <option value="Mechanical">Mechanical</option>
    //               <option value="Printing">Printing</option>
    //           </select>
    //           </div>
    //         </div>

    //         {/* year */}
    //         <div className="flex flex-col mb-6">
    //           <label htmlFor="year" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Year</label>
    //           <div className="relative">
    //           <select id="year" name="year" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
    //               <option value="1">FE</option>
    //               <option value="2">SE</option>
    //               <option value="3">TE</option>
    //               <option value="4">BE</option>
    //           </select>
    //           </div>
    //         </div>

    //         {/* password */}
    //         <div className="flex flex-col mb-6">
    //           <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
    //           <div className="relative">
    //             <input required id="password" type="password"   name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
    //           </div>
    //         </div>

    //         {/* confirm password  */}
    //         <div className="flex flex-col mb-6">
    //           <label htmlFor="cpassword" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Confirm Password:</label>
    //           <div className="relative">
    //             <input required id="cpassword" type="password"   name="cpassword" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Confirm Password" />
    //           </div>
    //         </div>
    
    //         <div className="flex w-full">
    //           <button type="button" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
    //             <span className="mr-2 uppercase">Sign Up</span>
    //             <span>
    //               <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    //               </svg>
    //             </span>
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="flex justify-center items-center mt-6">
    //       <a href="#" target="_blank" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
    //         <span>
    //           <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    //             <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    //           </svg>
    //         </span>
    //         <span className="ml-2">Already have an account?</span>
    //       </a>
    //     </div>
    //   </div>
    // </div>






  const initial = {
      name:"",
      email: "",
      password: "",
      cpassword:"",
      contact:""
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
      if (!values.name) {
        errors.name = "Name Required";
      }
      if (!values.cpassword) {
        errors.cpassword = "Confirm Password";
      }
      else if (values.password!=values.cpassword){
        errors.cpassword = "Password is not matching with above password";
      }
      if (!values.contact) {
        errors.contact = "Contact Required";
      }
      else if(values.contact.length!=10){
        errors.contact = "Contact must be 10 digits";
      }
      return errors;
  };
  return (
      <div className='form-container'>
          {Object.keys(formErrors).length === 0 && isSubmit ? window.open("Home","_self"): console.log("No")}
          {/* <div className='form-content-left'>
              <img src={login} className="form-img" alt="login" />
          </div> */}
          <div >
              <form className="form" onSubmit={handleSubmit}>
                  <h1>Sign Up</h1>
                  {/* name  */}
                  <div className="form-inputs">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" name="name" id="name" className="form-input" placeholder="Enter Full Name" value={formValues.name} onChange={handleChange} />
                      { <p>{formErrors.name}</p> }
                  </div>
                  {/* email  */}
                  <div className="form-inputs">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" name="email" id="email" className="form-input" placeholder="Enter Email" value={formValues.email} onChange={handleChange} />
                      { <p>{formErrors.email}</p> }
                  </div>
                  {/* contact */}
                  <div className="form-inputs">
                      <label htmlFor="contact" className="form-label">Contact Number</label>
                      <input type="number" maxLength="10" minLength="10" name="contact" id="contact" className="form-input" placeholder="Enter Contact Number" value={formValues.contact} onChange={handleChange} />
                      { <p>{formErrors.contact}</p> }
                  </div>
                  {/* branch  */}
                  <div className="form-inputs">
                      <label htmlFor="branch" className="form-label">Branch</label>
                      <select id="branch" name="branch" className="form-input">
                        <option value="Computer">Computer</option>
                        <option value="IT">IT</option>
                        <option value="Electrical">Electrical</option>
                        <option value="ENTC">ENTC</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Printing">Printing</option>
                    </select>
                  </div>
                  {/* yea */}
                  <div className="form-inputs">
                      <label htmlFor="branch" className="form-label">Year</label>
                      <select id="year" name="year" className="form-input">
                        <option value="1">FE</option>
                        <option value="2">SE</option>
                        <option value="3">TE</option>
                        <option value="4">BE</option>
                    </select>
                  </div>
                  <div className="form-inputs">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" name="password" id="password" className="form-input" placeholder="Enter Password" value={formValues.password} onChange={handleChange} />
                      <p>{formErrors.password}</p>
                  </div>
                  <div className="form-inputs">
                      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                      <input type="password" name="cpassword" id="cpassword" className="form-input" placeholder="Confirm Password" value={formValues.cpassword} onChange={handleChange} />
                      <p>{formErrors.cpassword}</p>
                  </div>
                  <button className="form-input-btn" type="submit">Sign Up</button>
                  <span className="form-input-login">
                      Already have an account?   <a href="#">Login here</a> 
                  </span>
              </form>
          </div>
      </div>

  
      
    )
}
