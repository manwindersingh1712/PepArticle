import Articles from "./components/articles";
import Navbar from "./components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App select-none">
      <Navbar />
      <Articles />
    </div>
  );
}

export default App;
