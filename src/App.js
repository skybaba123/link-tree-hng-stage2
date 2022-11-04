import "./App.scss";
import "animate.css";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
