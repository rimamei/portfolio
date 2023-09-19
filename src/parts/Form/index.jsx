import React, { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newData = { name, email, message };

    const res = await axios.post(
      `${process.env.REACT_APP_URL}/api/v1/contact`,
      newData
    );

    if (res.status === 200) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  
  return (
    <div>
      <form>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />
        </div>
        <div className={styles.formGroup}>
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message..."
          />
        </div>
        <button type="submit" className={`button ${styles.btnContact}`}  onSubmit={handleSubmit}  >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Form;