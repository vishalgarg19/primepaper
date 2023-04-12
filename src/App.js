import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Management from "./components/ourManagemnet/OurManagement";
import OurCsrPolicy from "./components/ourCsrPolicy/OurCsrPolicy";
import Circle from "./components/ResulableComponents/Circle";
import OurMachine from "./components/ourMachines/OurMachine";
import OtherFacilities from "./components/otherFacilities/OtherFacilities";
import Infrastructure from "./components/infrastructure/Infrastructure";
import Careers from "./components/careers/Careers";
import ContactUs from "./components/contactus/ContactUs";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-management" element={<Management />} />
        <Route path="/our-csr-policy" element={<OurCsrPolicy />} />
        <Route path="/products" element={<Circle />} />
        <Route path="/our-machine" element={<OurMachine />} />
        <Route path="/other-facilities" element={<OtherFacilities />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
