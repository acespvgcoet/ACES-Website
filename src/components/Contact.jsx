import React from "react";
import "../css/globalStyles.css";
import "../css/Contact.css";
import ContactUsupperpart from "./ContactUsupperpart";
import ContactUsMiddle from "./ContactUsMiddle";
import "../css/ContactMiddle.css";
import Map1 from "../components/Map1";
import Header from "./Header";

function Contact() {
  return (
    <div className="contact">
      <Header />
      <ContactUsupperpart></ContactUsupperpart>
      <ContactUsMiddle></ContactUsMiddle>
      <br></br>
      <Map1></Map1>
      <br></br>
    </div>
  );
}

export default Contact;
