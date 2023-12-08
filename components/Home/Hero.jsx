import React from 'react'
import Navbar from '../Navbar'
import Image from "next/image"

const Hero = () => {
  return (
    <div className='w-full items-center relative flex flex-col justify-between    h-[100vh]'>
        <div className='absolute -z-10 w-full h-full'>
            <Image src={`/image/hero.png`} width={1000} height={1000} className='w-full h-full object-cover'/>
        </div>
        <Navbar/>
        <div className='flex flex-col gap-2 w-full items-center'>
            <h1 className='text-white text-[20px] font-bold text-center'>Transforming Visions into Results</h1>
            <h1 className='text-[30px] md:text-[48px] max-w-[800px] text-center leading-8 md:leading-[50px] font-bold text-white'>Your Trusted Partner in Strategic Consulting Excellence</h1>
            <button className='px-6 py-3 hover:scale-110 transition-all rounded-md bg-[#F2C300] text-white mt-3'>Know more</button>

        </div>
        <div></div>
      
    </div>
  )
}

export default Hero
