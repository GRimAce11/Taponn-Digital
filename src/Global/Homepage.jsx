import React from 'react'
import Hero from "../Pages/Hero/Hero"
import About from '../Pages/About/About'
import Contact from '../Pages/Contactus/Contact'
import Pricing from '../Pages/Pricing/Pricing'
import Footer from './Footer'
import Features from '../Pages/Feature/Features'
const Homepage = () => {
    return (
        <>
            <Hero />
            <Features />
            <About />
        </>
    )
}

export default Homepage