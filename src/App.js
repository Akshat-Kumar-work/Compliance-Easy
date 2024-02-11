import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

<<<<<<< HEAD
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
=======

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import PayrollProcessing from './pages/PayrollProcessing';
import StatutoryCompliance from './pages/StatutoryCompliance';
import OperationalCompliance from './pages/OperationalCompliance';
>>>>>>> 139dc3ee2dde2e6f01b5a9d249ed80e47b03803e

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Compliance Eazy");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
<<<<<<< HEAD
=======
            <Route path="/Payroll" element={<PayrollProcessing />} /> 
            <Route path="/statutory" element={<StatutoryCompliance />} /> 
            <Route path="/operational" element={<OperationalCompliance />} /> 
>>>>>>> 139dc3ee2dde2e6f01b5a9d249ed80e47b03803e
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
