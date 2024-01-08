import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import "./assets/styles/index.scss";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-right" autoClose={4000} rtl={true} />
    </Provider>
  </React.StrictMode>
);
