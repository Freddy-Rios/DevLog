// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testpage" element={<Test />} />
        {/* Define more routes as needed */}
      </Routes>
    </Router>
  );
}
