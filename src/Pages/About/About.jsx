import React from 'react'

const About = () => {
    return (
        <section id='About' className="relative h-auto w-full pt-16 bg-black">
            <div className="container font-primary mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-white">
                            <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" className="w-full align-middle rounded-t-lg" />
                            <blockquote className="relative p-8 mb-4">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-[95px] -top-[94px]">
                                    <polygon points="-30,95 583,95 583,65" class="text-white fill-current"></polygon>
                                </svg>
                                <h4 className="text-xl font-bold text-black">
                                    Great for your awesome project
                                </h4>
                                <p className="text-md font-light mt-2 text-black">
                                    Putting together a page has never been easier than matching
                                    together pre-made components. From landing pages presentation
                                    to login areas, you can easily customise and built your pages.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 px-4">
                        <h2 className='text-white text-4xl pl-10'>About our product</h2>
                        <div className="flex flex-wrap text-white">
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col mt-4">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i className="fas fa-sitemap" />
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                                        <p className="mb-4 text-blueGray-500">
                                            Notus JS comes with a huge number of Fully Coded CSS
                                            components.
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:relative flex flex-col">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i className="fas fa-drafting-compass" />
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold">
                                            JavaScript Components
                                        </h6>
                                        <p className="mb-4 text-blueGray-500">
                                            We also feature many dynamic components for React, NextJS,
                                            Vue and Angular.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 mt-4">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i className="fas fa-newspaper" />
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                                        <p className="mb-4 text-blueGray-500">
                                            This extension also comes with 3 sample pages. They are
                                            fully coded so you can start working instantly.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex flex-col min-w-0">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i className="fas fa-file-alt" />
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                                        <p className="mb-4 text-blueGray-500">
                                            Built by developers for developers. You will love how easy
                                            is to to work with Notus JS.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About