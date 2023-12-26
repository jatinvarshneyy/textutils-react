import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [mode, setMode] = useState("light"); // Enable Dark Mode or Not
  const [alert, setAlert] = useState(null);

  // showAlert is a function which displays the alerts.
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // toggleMode is a function which handles the dark/light mode features.
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#092635";
      showAlert("Dark Mode has been enabled !", "success");
      document.title = "TextUtils : Dark Mode";
      
      setInterval(() => {
        document.title = "TextUtils is Amazing...";
      }, 2000);
      setInterval(() => {
        document.title = "Repair your text...";
      }, 1500);

    } else {
      setMode("light");
      document.body.style.backgroundColor = "whitesmoke";
      showAlert("Dark Mode has been disabled !", "success");
      document.title = "TextUtils : Light Mode";
    }
  };
  return (
    <BrowserRouter>
    <Navbar firstTitle="Text" secondTitle="Utils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    
    <div className="myApp">
      <Routes>
        <Route path="/" element={<TextForm
          showAlert={showAlert}
          textboxLabel="Enter the text for repairing :"
          mode={mode}
        />} />
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;