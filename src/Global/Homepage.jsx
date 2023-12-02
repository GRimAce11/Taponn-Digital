import React from 'react'
import Hero from "../Pages/Hero/Hero"
import About from '../Pages/About/About'
import Features from '../Pages/Feature/Features'
import Pricing from '../Pages/Pricing/Pricing'
import HowToUse from '../Pages/HowToUse/HowToUse'
const Homepage = () => {
    return (
        <>
            <Hero />
            
            <About />
            <Features />
            <HowToUse />
            <Pricing />
        </>
    )
}

export default Homepage