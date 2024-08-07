// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import ScrollToTopButton from './component/ScrollToTopButton';
import About from './component/About';
import Tournament from './component/Tournament';
// import AllGames from './component/AllGames';
import Contact from './component/Contact';
import TermsAndConditions from './component/Terms&Conditions';
import PrivacyPolicy from "./component/PrivacyPolicy";
import RefundAndCancellation from './component/RefundAndCancellation';
import Product from './component/allgames/Product';
import { ScrollToTopController } from './component/Windowtoscroll';
import AllGames from './component/OurAllGames';
import AppDownload from './component/AppDownload';
// import Blog from './component/Blog';
// import OurAllGames from './component/OurAllGames';
import Loader from './component/Loader';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a 3 second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <div className="loader-overlay">
            <i ><img src='./images/MG-logo.png' style={{width:"100px"}} className="fas fa-spinner fa-spin"/></i>
          </div>
        ) : (
          <div className="content">
            
            <ScrollToTopButton />
            <Router>
              <ScrollToTopController />
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Tournament' element={<Tournament />} />
                <Route path='/OurAllGames' element={<AllGames />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/terms_and_conditions' element={<TermsAndConditions />} />
                {/* <Route path='/Blog' element={<Blog/>}/> */}
                {/* <Route path='/privacy_policy' element={<PrivacyPolicy />} /> */}
                <Route path='/Privacy' element={<PrivacyPolicy />} />
                <Route path='/Refund_and_cancellation_policy' element={<RefundAndCancellation />} />
                <Route path="/AllGame/:productId" element={<Product />} />
                <Route path="*" element={<Home />} />
              </Routes>
              <AppDownload />
              <Footer />
            </Router>
          </div>
        )}
      </div>
    </>
  );
};

export default App;