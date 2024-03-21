import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./views/core/Index";
import Detail from "./views/core/Detail";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/:slug/" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
