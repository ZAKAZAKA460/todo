
import "./thems/variable.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "@/components/pages/main/main.jsx";
import Profile from "@/components/pages/profile/profile.jsx";




function App() {
  return (<>

  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Main/> } />
      <Route path="/profile" element={<Profile/>} />
      
  </Routes>
  </BrowserRouter>
  </>)
}

export default App
