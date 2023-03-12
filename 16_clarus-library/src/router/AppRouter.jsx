import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { GlobalStyles } from "../styles/Global.styles";

const AppRouter = ({ myTheme, setMyTheme }) => {
  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem("user"))
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  )
}

export default AppRouter