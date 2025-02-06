import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function SwitchToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.div
      className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
      onClick={() => setDarkMode(!darkMode)}
      initial={false}
      animate={{ backgroundColor: darkMode ? "#374151" : "#d1d5db" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="w-7 h-7 bg-white dark:bg-yellow-400 rounded-full shadow-md"
        layout
        animate={{ x: darkMode ? 28 : 0, rotate: darkMode ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.div>
  );
}

export default SwitchToggle;
