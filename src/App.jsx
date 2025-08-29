import React from "react";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
