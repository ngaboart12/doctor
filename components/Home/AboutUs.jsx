import React from 'react'
import Image from 'next/image'

const Aboutus = () => {
  return (
    <div className='w-full max-w-7xl  flex justify-center px-[20px] md:px-20 py-20'>
      <div className='flex flex-col md:flex-row gap-10 w-full '>
        <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center  justify-center '>
            <Image src={`/image/about.png`} width={250} height={200} alt='l' className='' />
            {/* <Image src={`/image/about.png`} width={200} height={200} alt='l' className='  absolute top-[20px] left-[10px] mx-0 -z-10' /> */}
            {/* <Image src={`/image/about.png`} width={150} height={200} alt='l' className=' absolute top-0 right-[100px]' /> */}

        </div>
        <div className='w-full md:w-1/2  justify-center  flex flex-col gap-5 items-center md:items-start'>
            <span className='text-[16px] text-[#F2C300] text-center md:text-start '>About us</span>
            <h1 className='text-[#2B6490] font-[500] max-w-[400px] leading-6 text-[24px] text-center md:text-start'>Global experts headquartered in Kigali, Rwanda</h1>
            <p className='text-[16px] leading-6 max-w-[450px] text-center md:text-start'>Specializing in corporate training and human resource consulting services. We serve Rwandan businesses, public and private institutions,
                 manufacturing companies, factories, and local/international NGOs, both locally and worldwide.
            </p>
            <button className='py-3 px-4 hover:scale-110 transition-all bg-[#F2C300] w-[150px] rounded-md text-white'>Know more</button>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
