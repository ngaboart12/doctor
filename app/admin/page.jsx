
import React from 'react'
import { CiHome ,CiBookmarkCheck,CiBoxList,CiLogout} from "react-icons/ci";


import Trainning from '@/components/admin/Trainning'
import Applicants from '@/components/admin/Applicants'
import Navbar from '@/components/admin/Navbar';

  export default function page() {

    
    return (
      <div className='  flex flex-row w-full max-w-7xl gap-x-2'>
        <div className='flex px-[20px] h-[100vh] bg-[#1D698D] flex-col gap-4 justify-between items-center w-[200px] py-4 '>
          <div className='flex flex-col gap-y-10'>

          <div className='text-[20px] font-bold'>LOGO</div>
          <div className='flex flex-col gap-8 text-white font-[100]'>
            <div className='cursor-pointer hover:opacity-50 display flex flex-row gap-2 items-center'>
             <CiHome/> <span className=''>Back to site</span>
            </div>
            <div className='cursor-pointer hover:opacity-50 display flex flex-row gap-2 items-center'>
             <CiBookmarkCheck/> <span className=''>Trainning</span>
            </div>
            <div className='cursor-pointer hover:opacity-50 display flex flex-row gap-2 items-center'>
             <CiBoxList/> <span className=''>Applicants</span>
            </div>
         
          </div>
          </div>
          <div className='flex flex-row items-center gap-2 text-white'>
            <CiLogout/><span>Logout</span>
          </div>
        </div>
        <div className='flex flex-col gap-10 w-full pr-10'>
          <Navbar/>

        {/* <Applicants/> */}
         <Trainning/> 
        </div>
     
      
      </div>
    )
  }
