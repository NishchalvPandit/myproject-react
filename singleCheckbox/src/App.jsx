
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        Accept Terms and Conditions
      </label>

      <p>{isChecked ? "Checked " : "Not Checked"}</p>
    </div>
  );
}

export default App;
