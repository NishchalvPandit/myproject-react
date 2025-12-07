import { useState } from "react";

function App() {
  const [text, setText] = useState("hello i am learning react");
  const [btnLabel, setBtnLabel] = useState("hide");

  function toggle() {
    if (btnLabel === "hide") {
      setText("");
      setBtnLabel("show");
    } else {
      setText("hello i am learning react");
      setBtnLabel("hide");
    }
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={toggle}>{btnLabel}</button>
    </div>
  );
}

export default App;
