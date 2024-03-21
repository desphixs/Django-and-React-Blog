import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./views/core/Index";
import Detail from "./views/core/Detail";
import Category from "./views/core/Category";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";
import CreatePassword from "./views/auth/CreatePassword";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/:slug/" element={<Detail />} />
                    <Route path="/category/" element={<Category />} />

                    {/* Authentication */}
                    <Route path="/register/" element={<Register />} />
                    <Route path="/login/" element={<Login />} />
                    <Route path="/logout/" element={<Logout />} />
                    <Route path="/forgot-password/" element={<ForgotPassword />} />
                    <Route path="/create-password/" element={<CreatePassword />} />

                    {/* Pages */}
                    <Route path="/about/" element={<About />} />
                    <Route path="/contact/" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
