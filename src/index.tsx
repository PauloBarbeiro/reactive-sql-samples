import { createRoot } from 'react-dom/client';
import React, { lazy } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// App
import App from "./App";
import Beatles from "./samples/beatles";
import GameIndustry from "./samples/gameIndustry";

window.addEventListener('load', async () => {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="beatles" element={<Beatles />} />
                <Route path="game-industry" element={<GameIndustry />} />
            </Routes>
        </BrowserRouter>,
    )
})