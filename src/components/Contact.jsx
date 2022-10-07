import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handlecontactForm = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };
  return (
    <div className="contact">
      <form className="contact-form" onSubmit={handlecontactForm}>
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName((prev) => e.target.value)}
          />
        </div>
        <div className="e-mail">
          <label htmlFor="e-mail">E-mail:</label>

          <input
            type="email"
            id="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail((prev) => e.target.value)}
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setmessage((prev) => e.target.value)}
          ></textarea>
        </div>
        <button type="submit"> </button>
      </form>
    </div>
  );
};

export default Contact;
