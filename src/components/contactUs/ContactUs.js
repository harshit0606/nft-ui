import React, { useState } from "react";
import "./contactus.css";
import emailjs from "emailjs-com";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  var template_params={
    name:name,
    email:email,  
    company:company,
    subject:subject,
    message:message
  };
  function sendmail(e){
    e.preventDefault();
    emailjs.send("service_p0at8ol","template_fpqahjc",template_params,"-2kTWjsAZyzK_cvAs")
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
   setEmail("");
   setName("");
   setCompany("");
   setSubject("");
   setMessage("");
  }


  const handleChange=(e)=> {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "company") {
      setCompany(value);
    }
    if (name === "subject") {
      setSubject(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  }

  return (
    <div className="contact">
      <div className="banner">
        <h1 className="banner_h1">Contact Us</h1>
      </div>
      <div className="contact_main">
        <h1>Get in touch</h1>
        <br></br>
        <div className="contact_form">
          <div className="contact_row">
            <div className="contact_input">
              <h2>NAME</h2>
              <input
                name="name"
                value={name}
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
              ></input>
            </div>
            <div className="contact_input">
              <h2>EMAIL</h2>
              <input
                name="email"
                value={email}
                type="text"
                placeholder="email@example.com"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="contact_row">
          <div className="contact_input">
            <h2>COMPANY</h2>
            <input
              name="company"
              value={company}
              type="text"
              placeholder="Company Name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="contact_input">
            <h2>SUBJECT</h2>
            <input
              name="subject"
              value={subject}
              type="text"
              placeholder="How can we help?"
              onChange={handleChange}
            ></input>
          </div>
          </div>
          <div className="contact_textarea">
            <h2>MESSAGE</h2>
            <textarea
              name="message"
              value={message}
              type=""
              rows="8"
              placeholder=" I would like to get in touch with the team from cryptoclub.."
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button onClick={sendmail} className="sendMessage_btn" >Send Message</button>
      </div>
    </div>
  );
}

export default ContactUs;
