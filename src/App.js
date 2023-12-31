import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Photography } from "./components/Pages/Photography";
import { Videography } from "./components/Pages/Videography";
import { Contact } from "./components/Pages/Contact";
import { Portfolio } from "./components/Pages/Portfolio";
import { PrivacyPolicy } from "./components/Pages/PrivacyPolicy";
import Weddings from './components/Pages/Weddings';
import Motorsport  from "./components/Pages/Motorsport";
import Landscapes from "./components/Pages/Landscapes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/videography" element={<Videography />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/motorsport" element={<Motorsport />} />
            <Route path="/landscapes" element={<Landscapes />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

export default App;
