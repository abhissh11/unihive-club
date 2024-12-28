import { Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Community from "./pages/Community";
import Hackathons from "./pages/Hackathons";
import Resources from "./pages/Resources";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
