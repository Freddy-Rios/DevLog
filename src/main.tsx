import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Header from "./Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <div className="pt-16">
      {" "}
      {/* Ensure content is not hidden behind header */}
      <App />
    </div>
  </StrictMode>
);
