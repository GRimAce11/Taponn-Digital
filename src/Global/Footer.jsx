import React from 'react'

const Footer = () => {
  return (
    <footer className="px-3 py-8 text-white transition-colors duration-200 overflow-x-hidden bg-black">
      <div className="flex flex-col">
        <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
          <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
            <a
              aria-current="page"
              href="#"
              className="hover:text-white"
            >
              Products
            </a>
            <a
              aria-current="page"
              href="#"
              className="hover:text-white"
            >
              Features
            </a>
            <a
              aria-current="page"
              href="#"
              className="hover:text-white"
            >
              Gallery
            </a>
          </nav>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
          <div className="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
            <a
              className="hover:text-primary-gray-20"
              href="#"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0,0,256,256" style={{ fill: '#000000' }}>
                <g fill="#ffffff" className='hover:fill-purple-600' fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z" /></g></g>
              </svg>
            </a>
            <a className="ml-4 hover:text-primary-gray-20" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0,0,256,256" style={{ fill: '#000000' }}>
                <g fill="#ffffff" className='hover:fill-red-600' fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M15,4c-4.186,0 -9.61914,1.04883 -9.61914,1.04883l-0.01367,0.01563c-1.90652,0.30491 -3.36719,1.94317 -3.36719,3.93555v6v0.00195v5.99805v0.00195c0.00384,1.96564 1.4353,3.63719 3.37695,3.94336l0.00391,0.00586c0,0 5.43314,1.05078 9.61914,1.05078c4.186,0 9.61914,-1.05078 9.61914,-1.05078l0.00195,-0.00195c1.94389,-0.30554 3.37683,-1.97951 3.37891,-3.94727v-0.00195v-5.99805v-0.00195v-6c-0.00288,-1.96638 -1.43457,-3.63903 -3.37695,-3.94531l-0.00391,-0.00586c0,0 -5.43314,-1.04883 -9.61914,-1.04883zM12,10.39844l8,4.60156l-8,4.60156z" /></g></g>
              </svg>
            </a>
          </div>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
          <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
            <span>© 2023</span>
            <span className="mt-7 md:mt-1 ">
              Created by&nbsp;
              <a
                className="underline hover:text-primary-gray-20"
                href="https://nicozn.com/"
                target='_blank'
                rel='noreferrer'
              >
                Nicozn Technologies
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer