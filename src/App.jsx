import React from 'react'
import Navbar from './Global/Navbar'
import Homepage from './Global/Homepage'
import Contact from './Pages/Contactus/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Global/Footer'
import Features from './Pages/Feature/Features';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' exact element={<Homepage />} />
          <Route path='/Contact_Us' exact element={<Contact />} />
          <Route path='/Features' exact element={<Features/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App