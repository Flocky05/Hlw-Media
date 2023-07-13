import React, { useState } from "react";

const MyForm = () => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the submitted message
    console.log("Submitted message:", message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
          rows={4}
          cols={50}
        />
      </div>
      <button className="btn btn-primary text-white mt-3" type="submit">
        Submit
      </button>
    </form>
  );
};

export default MyForm;
