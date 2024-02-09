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


import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import PayrollProcessing from './pages/PayrollProcessing';
import StatutoryCompliance from './pages/StatutoryCompliance';
import OperationalCompliance from './pages/OperationalCompliance';

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
            <Route path="/Payroll" element={<PayrollProcessing />} /> 
            <Route path="/statutory" element={<StatutoryCompliance />} /> 
            <Route path="/operational" element={<OperationalCompliance />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
