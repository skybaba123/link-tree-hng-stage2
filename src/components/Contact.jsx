import React, { useState } from "react";
import "animate.css";
import classes from "./Contact.module.scss";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [err, setErr] = useState(true);

  const messageChangeHandler = (e) => {
    setMessageInput(e.target.value);
    if (messageInput.trim().length > 1) {
      setErr(false);
    } else if (messageInput.trim().length === 1) setErr(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setMessageInput("");
    navigate("/");
    alert("Message sent");
  };

  const validForm =
    firstNameInput.length > 0 &&
    lastNameInput.length > 0 &&
    emailInput.length > 0 &&
    messageInput.length >= 3;

  return (
    <form onSubmit={submitHandler}>
      <h1 className={classes["main-text"]}>Contact</h1>

      <p className={classes["sub-text"]}>
        Hi there, contact me to ask me about anything you have in mind.
      </p>

      <div className={classes["first-last"]}>
        <div style={{ animation: "fadeInUp 1s", animationDelay: "0.2" }}>
          <label htmlFor="first_name">First name</label> <br />
          <input
            placeholder="Enter your first name"
            required
            id="first_name"
            type="text"
            value={firstNameInput}
            onChange={(e) => setFirstNameInput(e.target.value)}
          />
        </div>
        <div style={{ animation: "fadeInUp 1s", animationDelay: "0.2" }}>
          <label htmlFor="last_name">Last Name</label> <br />
          <input
            placeholder="Enter your last name"
            required
            id="last_name"
            type="text"
            value={lastNameInput}
            onChange={(e) => setLastNameInput(e.target.value)}
          />
        </div>
      </div>

      <div
        style={{ animation: "fadeInUp 1s", animationDelay: "0.3" }}
        className={classes["email-wrapper"]}
      >
        <label htmlFor="email">Email</label> <br />
        <input
          placeholder="yourname@email.com"
          required
          id="email"
          type="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>

      <div
        style={{ animation: "fadeInUp 1s", animationDelay: "0.4" }}
        className={classes["message-wrapper"]}
      >
        <label htmlFor="message">Message</label> <br />
        <textarea
          id="message"
          placeholder="Send me a message and i'll reply you as soon as possible"
          required
          name="message"
          style={{
            transition: "all 1s",
            border: err ? "1px solid #F89687" : "",
            boxShadow: err
              ? "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC"
              : "",
          }}
          value={messageInput}
          onChange={messageChangeHandler}
        ></textarea>
        <p style={{ opacity: err ? "1" : "0", transition: "all 1s" }}>
          Please enter a message
        </p>
      </div>

      <div className={classes["check-wrapper"]}>
        <input required type="checkbox" />
        <p>
          You agree to providing your data to Ugochukwu who may contact you.
        </p>
      </div>

      <button disabled={!validForm} id="btn_submit">
        Send Message
      </button>
    </form>
  );
};

export default Contact;
