import React from "react";
import Cadastro from "../containers/Cadastro";
import Home from "../containers/Home";
import Login from "../containers/Login";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function Routering() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}
