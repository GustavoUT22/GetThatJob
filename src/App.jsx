import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <br></br>
      <Footer/>
    </>
  );
}

export default App;
