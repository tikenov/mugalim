import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../pages/About/About';
import Associations from '../pages/Associations/Associations';
import Contacts from '../pages/Contacts/Contacts';
import Faq from '../pages/Faq/Faq';
import Home from '../pages/Home/Home';
import Participants from '../pages/Participants/Participants';
import Register from '../pages/Register/Register';
import Support from '../pages/Support/Support';
import './Main.scss';

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <main id="main-content" className="main" role="main">
      <div className="page-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="participants" element={<Participants />} />
          <Route path="associations" element={<Associations />} />
          <Route path="register" element={<Register />} />
          <Route path="support" element={<Support />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="faq" element={<Faq />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
