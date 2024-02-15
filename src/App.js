import './App.css';
import * as React from "react";

function App() {
  const [bulbTransition, setBulbTransition] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const handleInputChange = () => {
    setBulbTransition(true);
    setTimeout(() => {
      setBulbTransition(false);
      setDarkMode(!darkMode);
    }, 500)
  };

  return (
    <>
      <div
        className={bulbTransition ? 'stretch-lamp' : darkMode ? "lamp-on" : "lamp"}
        onClick={handleInputChange}>
        <div className="light"></div>
      </div>
    </>
  );
}

export default App;
