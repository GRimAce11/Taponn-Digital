import React from 'react'
import Hero from "../Pages/Hero/Hero"
import About from '../Pages/About/About'
import Contact from '../Pages/Contactus/Contact'
import Pricing from '../Pages/Pricing/Pricing'
import Footer from './Footer'
const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            <Pricing />
            <Contact />
            <Footer />
        </>
    )
}

export default Homepage