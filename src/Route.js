import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Services } from "./pages/Services";
// import { Contact } from "./pages/Contact";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

export const AppRoutes = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};
