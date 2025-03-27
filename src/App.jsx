import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";
import Watchlist from "./pages/Watchlist";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/trending" element=<Trending /> />
          <Route path="/blog" element=<Blog /> />
          <Route path="/about" element=<About /> />
          <Route path="/contact" element=<Contact /> />
          <Route path="/watchlist" element=<Watchlist /> />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
