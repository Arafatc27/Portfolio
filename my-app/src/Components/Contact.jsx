import React, { useState } from "react";
import "./Contact.css";
import me from '../Images/MeInWhite.jpeg'

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { firstName, lastName, email });
  }
  return (
    <div className="wrapper">
      <div className="container">
        <img src={me} alt="me" className="profile" />
        <div className="form-container">
          <form>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname"> First Name</label>
              </div>
              <div className="col-75">
                <input
                  id="fname"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter here..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Last Name</label>
              </div>
              <div className="col-75">
                <input
                  id="lname"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter here..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email"> Email </label>
              </div>
              <div className="ecol-75">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter here..."
                />
              </div>
            </div>
          </form>
          <div className="submit-button">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
      <p className="bio">
        Hello, there! fill up the form and you will be in contact with Arafat!
      </p>
    </div>
  );
}

export default Contact;