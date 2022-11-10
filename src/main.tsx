import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./store/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowDetail from "./pages/ShowDetail";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/show/:showId" element={<ShowDetail />} />
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);
