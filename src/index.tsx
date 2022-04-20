import ReactDOM from 'react-dom';
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
    ReactDOM.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="beatles" element={<Beatles />} />
                <Route path="game-industry" element={<GameIndustry />} />
            </Routes>
        </BrowserRouter>,
        container
    )
})