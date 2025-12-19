import { useEffect, useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    if (count % 2 === 0) {
      document.title = "hello";
    }
    else {
      document.title = "bye";
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>click here to change the title
      </button>
    </div >
  );
}

export default App;
