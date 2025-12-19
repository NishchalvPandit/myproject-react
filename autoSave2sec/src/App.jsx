import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [inputvalue, setInputvalue] = useState("");
  const [savedvalue, setSavedvalue] = useState({ value });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSavedValue(inputvalue);
      console.log("auto-saved", inputvalue);
    }, 2000);
    return () => clearTimeout(timer);
  }, [inputvalue]);

  return (
    <form>
      <label for="message">Your Message:</label>
      <br />
      <textarea
        id="message"
        name="message"
        rows="5"
        cols="40"
        placeholder="Write your message here..."
        value={show}
        onChange={(e) => setShow(e.target.value)}
      ></textarea>

      <p>You typed:{value}</p>
      <p>Saved value:{savedvalue}</p>
    </form>
  );
}

export default App;
