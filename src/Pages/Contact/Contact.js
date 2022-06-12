import React, { useContext, useRef, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css";
import { themeContext } from "../../Context";
function ContactForm() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [state, handleSubmit] = useForm("meqndkpb");
  if (state.succeeded) {
    return <p className="msg">Thanks for joining!</p>;
  }
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">


        <form action="https://formspree.io/f/meqndkpb" method="POST" onSubmit={handleSubmit}>
          <label className="fs-4 fw-bold" htmlFor="email">
            Please fill up this section.
          </label>
          <input
            id="Name"
            type="name"
            name="name"
            className="user"
            placeholder="name"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <input
            id="email"
            type="email"
            name="email"
            className="user"
            placeholder="email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
            className="user"
            placeholder="Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button className="submit-button" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};
function App() {
  return (
    <ContactForm />
  );
}

export default App;
