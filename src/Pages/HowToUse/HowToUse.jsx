import React from 'react'
import Swiperimg1 from "../../assets/How to use/pexels-ricky-esquivel-1964471.jpg";

const HowToUse = () => {
    return (
        <div className="font-primary flex text-center flex-col bg-black py-10">
            <h3 className='font-primary text-4xl text-white my-5'>How to Use</h3>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 bg-black">
                <figure className="mx-auto max-w-full w-60 h-auto">
                    <div className="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                        <img className="max-w-full h-auto rounded-[1.25rem]" src={Swiperimg1} alt="Image Description" />
                    </div>
                </figure>
                <figure className="mx-auto max-w-full w-60 h-auto">
                    <div className="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                        <img className="max-w-full h-auto rounded-[1.25rem]" src="../docs/assets/img/280x560/img1.jpg" alt="Image Description" />
                    </div>
                </figure>
                <figure className="mx-auto max-w-full w-60 h-auto">
                    <div className="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                        <img className="max-w-full h-auto rounded-[1.25rem]" src="../docs/assets/img/280x560/img1.jpg" alt="Image Description" />
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default HowToUse