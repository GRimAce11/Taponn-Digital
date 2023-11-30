import React from 'react'
import Navbar from './Global/Navbar'
import Homepage from './Global/Homepage'
import Contact from './Pages/Contactus/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' exact element={<Homepage />} />
          <Route path='/Contact_Us' exact element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App