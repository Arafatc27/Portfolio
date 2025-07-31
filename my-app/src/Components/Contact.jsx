import React, { useState } from "react";
import "./Contact.css";
import me from "../Images/me.jpeg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, phone });
    // TODO: send to backend / email service
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-photo">
          <img src={me} alt="Arafat sitting by the water" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Arafat</h2>

          <label htmlFor="contact-name" className="field-label">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="field-input"
            required
          />

          <label htmlFor="contact-email" className="field-label">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="field-input"
            required
          />

          <label htmlFor="contact-phone" className="field-label">
            Phone number
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (xxx)-xxx-xxxx"
            className="field-input"
          />

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
