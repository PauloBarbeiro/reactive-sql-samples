import { createRoot } from 'react-dom/client';
import React from "react";
import createSQL from "@paulobarbeiro/reactive-sql";

// App
import App from "./App";

const schema: any = {
    beatles: {
        fields: {id: 'INTEGER', age: 'INTEGER', name: 'TEXT'},
        values: [{id: 1, age: 20, name: 'Ringo'}, {id: 2, age: 18, name: 'Paul'}]
    }
}

window.addEventListener('load', async () => {
    await createSQL('http://localhost:3030/sql-wasm.wasm', schema)
        .then((db) => {
            console.log('DB is ready')
            // @ts-ignore
            window.db = db
            const container = document.getElementById('root');
            const root = createRoot(container);
            root.render(<App />)
        })
        .catch((err) => {console.log('ERROR: ', err)})
})