import React, { useState } from "react";
import "./contactus.css";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
        <button className="sendMessage_btn">Send Message</button>
      </div>
    </div>
  );
}

export default ContactUs;
