import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./global.css";

const env = process.env.NODE_ENV; // current environment

// use a different url depending on whether app is in development or production mode
export const SERVER_URL = 
                    (env === 'production'
                        ? 'https://group101-it-project.onrender.com' // production
                        : 'http://localhost:5050' // development
                    )

console.log(SERVER_URL);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);