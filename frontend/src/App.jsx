import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import BlogDetails from "./pages/displayBlog.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
