import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./views/core/Index";
import Detail from "./views/core/Detail";
import Category from "./views/core/Category";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/:slug/" element={<Detail />} />
                    <Route path="/category/" element={<Category />} />

                    {/* Pages */}
                    <Route path="/about/" element={<About />} />
                    <Route path="/contact/" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
