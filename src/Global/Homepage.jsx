import React from 'react'
import Hero from "../Pages/Hero/Hero"
import About from '../Pages/About/About'
import Contact from '../Pages/Contactus/Contact'
import Pricing from '../Pages/Pricing/Pricing'
const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            {/* <Pricing /> */}
            <Contact />
        </>
    )
}

export default Homepage