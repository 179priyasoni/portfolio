import { BrowserRouter, Route, Routes } from "react-router"
import './App.css'
import Home from "./pages/home";
import CustomCursor from "./component/customCursor";

function App() {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  
  return (
    <BrowserRouter>
      <CustomCursor />
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
