import Home from "./pages/Home";
<<<<<<< HEAD
import Bookmark from "./pages/Bookmark";
import Search from "./pages/Search";
=======
import Galeri from "./pages/Galeri";
>>>>>>> 4addd37619173dc06fe031ae4708bbd56edc8177
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/search" element={<Search />} />
=======
        <Route path="/galeri" element={<Galeri />} />
>>>>>>> 4addd37619173dc06fe031ae4708bbd56edc8177
      </Routes>
      <Footer />
    </>
  );
}

export default App;
