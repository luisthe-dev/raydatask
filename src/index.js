import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "./assets/css/Header.css";
import "./assets/css/AuctionHeader.css";
import "./assets/css/FeaturedItems.css";
import "./assets/css/FeaturedItem.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
