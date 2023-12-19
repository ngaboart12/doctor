import React, { useEffect, useRef } from 'react'

const AddTrainning = ({isClose,isOpen}) => {
  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        isClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isClose]);
  if (!isOpen) {
    return null;
  }
  return (
    <div  className='absolute left-0 top-0 w-full min-h-[100vh] bg-black/20 flex flex-col justify-center items-center'>
        <div   ref={modalRef} className='rounded-md p-4 w-1/2 h-1/2 bg-white flex flex-col gap-3'>
          <h1 className='text-center text-[20px] font-bold text-black'>ADD TRAINNING</h1>
          <form action="" encType='multipart/form-data' className=' w-full flex flex-col gap-4 items-center px-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          
          <div className='flex flex-col gap-1'>
            <span>Trainning Title</span>
            <input type="text" className=' outline-none p-3 border border-black/40 rounded-md' placeholder='Type Trainning name' />

          </div>
          <div className='flex flex-col gap-1'>
            <span>Trainning Date</span>
            <input type="date" className=' outline-none p-3 border border-black/40 rounded-md' />

          </div>
          <div className='flex flex-col gap-1'>
            <span>Trainning Discription</span>
            <textarea type="text" className='outline-none p-3 border border-black/40 rounded-md' placeholder='Trainning description' />

          </div>
          <div className='flex flex-col gap-1'>
           <span>Image</span>
          <input type="file" name='fileevent' id='fileevent' hidden />
          <label htmlFor="fileevent" className='border p-3 gap-1 cursor-pointer justify-center hover:opacity-90 bg-orange-400 rounded- flex flex-row items-center'>
            <span className='text-white text-[30px]'>+</span>
            <span className='text-white'>Add Image</span>
          </label>
          </div>
          </div>
          <button className='py-3 hover:opacity-90 w-60 rounded-sm text-white bg-orange-400 mt-2 mx-auto'>ADD</button>
          </form>

        </div>
      
    </div>
  )
}

export default AddTrainning
