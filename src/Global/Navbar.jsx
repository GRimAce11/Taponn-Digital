import React, { useState } from 'react'
import { Link as Scroll } from 'react-scroll';
import Close from "../assets/Navbar/Close1.png";
import Open from "../assets/Navbar/Open1.png";
import Logo from "../assets/Navbar/sector 9 final.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // const location = useLocation();
  // const path = location.pathname;
  // const navigate = useNavigate();

  const Navtitle = [
    { id: "Home", name: "Home", offset: 0 },
    { id: "About", name: "About", offset: -30 },
    { id: "Booking", name: "Booking", offset: 0 },
    { id: "Pricing", name: "Pricing", offset: -100 },
  ];
  const [nav, setNav] = useState(false);
  const [Navbar, setNavbar] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const changeBG = () => {
    if (window.scrollY > 150) {
      setNavbar(true);
      console.log("100");
    }
    else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBG);
  return (

    <nav
      className={Navbar ? 'w-full transition-all duration-300 fixed top-0 z-[999] bg-black' : 'w-full transition-all duration-300 fixed top-0 z-[999] '}>
      <div
        className="navbg w-full h-min bg-transparent py-1 ">
        <div className='w-full m-1  z-20 flex justify-between items-center px-10 text-white'>

          <Scroll to="Home" smooth={true} offset={0} duration={500}>
            {/* <h1 className="text-2xl text-red-500 font-bold">S9</h1> */}
            <img src={Logo} width={80} className='navigationbar cursor-pointer' alt="S9" />
          </Scroll>

          <ul className=' hidden lg:flex'>
            {Navtitle.map((nav, index) => (
              <li key={index} className="navtitles pt-4 px-4 pb-2 text-center hover:text-red-700  md:hover:bg-transparent">

                <Scroll to={nav.id} smooth={true} offset={nav.offset} duration={500} className='Navfont font-primary cursor-pointer text-lg'>{nav.name}</Scroll>
              </li>
            ))}
            <li className="navtitles pt-4 px-4 pb-2 text-center hover:text-red-700  md:hover:bg-transparent">

              <Link to="/Contact_Us" onClick={handleNav} className='Navfont font-primary cursor-pointer text-lg'>Contact Us</Link>

            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className='block lg:hidden z-[999]'>
            {nav ? (
              <img src={Close} width={40} height={50} alt="Close" />
            ) : (
              <img src={Open} width={40} height={50} alt="Ham" />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-out duration-300 z-[599]'
                : 'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-red-800 text-center ease-in duration-300 '
            }
          >
            <ul >
              {Navtitle.map((nav, index) => (
                <li key={index} onClick={handleNav} className="text-xl text-white py-6 px-6 text-center  hover:text-red-700  hover:rounded-xl border-blue-800 ">

                  <Scroll to={nav.id} smooth={true} offset={nav.offset} duration={500} onClick={handleNav} className='Navfont font-primary cursor-pointer'>{nav.name}</Scroll>

                </li>
              ))}
              <li onClick={handleNav} className="text-xl text-white py-6 px-6 text-center  hover:text-red-700  hover:rounded-xl border-blue-800 ">

                <Link to="/Contact_Us" onClick={handleNav} className='Navfont font-primary cursor-pointer'>Contact Us</Link>

              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar