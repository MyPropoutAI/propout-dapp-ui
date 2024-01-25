import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Web3Modal from "./context/Web3Modal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Web3Modal>
      <App />
    </Web3Modal>
  </React.StrictMode>
);
