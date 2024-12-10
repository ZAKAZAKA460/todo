
import "./thems/variable.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "@/components/pages/main/main.jsx";
import Profile from "@/components/pages/profile/profile.jsx";
import Calendar from "./components/pages/Calendar/calendar";
import Error from "./components/pages/404/404";
import Login from "./components/pages/login/login";




function App() {
  return (<>

  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Main/> } />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/calendar" element={<Calendar/>} />
      <Route path="*" element={<Error/> } />
      <Route path="/login" element={<Login/> } />
  </Routes>
  </BrowserRouter>
  </>)
}

export default App;
