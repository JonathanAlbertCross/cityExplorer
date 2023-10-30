import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <form onSubmit={getLocation}>
        <input type="text" />
        <button>Get Location</button>
      </form>
    </>
  );
}

export default App;
