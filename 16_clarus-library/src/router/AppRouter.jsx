import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { GlobalStyles } from "../styles/Global.styles";
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user")
  );
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/detail/:id" element={<Detail />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
