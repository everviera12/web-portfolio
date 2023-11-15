// import React from 'react';
import ReactDOM from "react-dom/client";

// react router
import { BrowserRouter } from "react-router-dom";

// impor bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import scss styles
import "./scss/main.scss";
import './scss/responsive.scss'

// components
import NavBar from "./components/NavBar";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
} else {
  console.error("Element with id 'root' not found.");
}
