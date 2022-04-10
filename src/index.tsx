// function component() {
//     const element = document.createElement('div');
//
//     const content: string = "Hello webpack"
//     element.innerHTML = content
//
//     return element;
// }
//
// document.body.appendChild(component());
import {render} from "react-dom";
import React from "react";
import App from "./App";

window.addEventListener('load', async () => {
    render(<App />, document.getElementById('root'))
})