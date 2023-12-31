import React from 'react'

const Pricing = () => {
  return (
    <div id='Pricing' className="pricingdiv flex text-center font-primary flex-col bg-black text-white">
      <h2 className='text-4xl mb-3'>Check Out Our Pricing</h2>
      <div className="flex justify-center font-primary bg-black">
        <div className=" flex md:flex-row flex-col px-4 py-2 gap-y-7 gap-x-7 max-w-7xl ">
        <div className="bg-gradient-to-tl from-black to-white border border-yellow-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="text-3xl ">Shankar</div>
              <div className="flex justify-center my-3 font-medium md:tracking-tighter ">
                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">₹</div>
                <div className="text-3xl md:text-5xl">9.99</div>
                <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]">/mo</div>
              </div>
              <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                <a href>Order Now</a></div>
              <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                <div className="m-1">All basic features</div>
                <div className="m-1">Advanced tracking</div>
                <div className="m-1">Onboarding + Migration assistance</div>
                <div className="m-1">Drip course content</div>
                <div className="m-1">Affiliates</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-black to-white border border-red-400 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="text-3xl ">Prabhakar</div>
              <div className="flex justify-center my-3 font-medium md:tracking-tighter ">
                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">₹</div>
                <div className="text-3xl md:text-5xl">9.99</div>
                <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]">/mo</div>
              </div>
              <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                <a href>Order Now</a></div>
              <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                <div className="m-1">All basic features</div>
                <div className="m-1">Advanced tracking</div>
                <div className="m-1">Onboarding + Migration assistance</div>
                <div className="m-1">Drip course content</div>
                <div className="m-1">Affiliates</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-black to-white border border-green-300 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="text-3xl ">Damodar</div>
              <div className="flex justify-center my-3 font-medium md:tracking-tighter ">
                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">₹</div>
                <div className="text-3xl md:text-5xl">9.99</div>
                <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]">/mo</div>
              </div>
              <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                <a href>Order Now</a></div>
              <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                <div className="m-1">All basic features</div>
                <div className="m-1">Advanced tracking</div>
                <div className="m-1">Onboarding + Migration assistance</div>
                <div className="m-1">Drip course content</div>
                <div className="m-1">Affiliates</div>
                <div className="m-1">Multiple Payments</div>
                <div className="m-1">ACH payments</div>
                <div className="m-1">Team Licenses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing