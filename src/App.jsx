import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";

const App = () => {
  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative">
      <button
        onClick={toggleDarkMode}
        className="fixed top-3 lg:top-4 right-3 lg:right-4 w-8 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shaow-lg hover:bg-amber-600 transition-colors"
      >
        <i className="bx bx-moon text-lg lg:text-xl"></i>
      </button>
      <Hero />
    </div>
  );
};

export default App;
