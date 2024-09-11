import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import EmpRegister from './pages/EmpRegister';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './components/Admin/AdminLink'
import AdminHome from './components/Admin/AdminHome';
import AllEmployes from './components/Admin/Pages/AllEmployes';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

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

  useDocTitle("manpower-consultancy");

  return (
    <>
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/EmpRegister" element={<EmpRegister />} />
          <Route path="/adminlogin" element={<AdminLogin />} />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </ScrollToTop>
    </Router>
    </>
  );
}


export default App;
