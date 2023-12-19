"use client"
import React, { useState } from 'react'
import Image from "next/image"
import AddTrainning from '../modal/AddTrainning'

const Trainning = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const isOpen = ()=>{
      setIsModalOpen(true)
    }
    const isClose = ()=>{
      setIsModalOpen(false)
    }
  return (
    <div className='flex flex-col gap-10 w-full'>
    <div onClick={isOpen} className='ml-auto hover:opacity-60 cursor-pointer text-[14px] p-2 border border-black/40 rounded-md'>
        Add trainning +
    </div>
    <div className='w-full flex flex-col gap-6'>
      <div className='flex flex-row  justify-between'>
        <div className='flex flex-row gap-3'>
          <div className='w-[100px] h-[100px]'>
            <Image src={`/image/member2.png`} width={300} height={300} className='w-full h-full object-cover rounded-lg' />
          </div>
          <div className='flex flex-col    '>
            <h1 className='text-blue-400 text-[14 px] font-bold'>VISIT RWANDA</h1>
            <span className='text-black/50 max-w-[300px] text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, deserunt praesentium. Optio fugit enim vitae earum
            </span>
            <div className='flex flex-row'>
              <div className=' text-blue-500 cursor-pointer hover:scale-110 transition-all'>View 10  applicants</div>

            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-center text-red-400 cursor-pointer'>Delete</div>
          <div className='text-center text-green-700 cursor-pointer'>Update</div>
        </div>
      </div>
    </div>  

    {isModalOpen && (

        
<AddTrainning isClose={isClose} isOpen={isOpen}/>
)}
  </div>
  )
}

export default Trainning
