import { useState } from "react";
// import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideBar />
    </>
  );
}

export default App;
