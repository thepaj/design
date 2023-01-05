import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/links/About";
import Contact from "./components/links/Contact";
import Portfolio from "./components/links/Portfolio";
import References from "./components/links/References";
import Services from "./components/links/Services";
import Main from "./components/links/Main";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/references" element={<References/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
