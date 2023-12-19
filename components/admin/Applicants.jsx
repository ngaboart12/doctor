import React from 'react'


const Applicants = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-[16px] font-bold text-center uppercase'>List of All Applicants </h1>
        <div className='flex flex-row'>
            <input type="text" placeholder='search apllicants' className='font-[200] border border-black/30 p-2 outline-none' />

        </div>
        <div className='border rounded-md border-black/20'>

        <table className=' w-full'>
            <thead>

            <tr className='h-14 border-b border-black/20'>
                <td className='px-2'>Full Name</td>
                <td>Email</td>
                <td>Trainning</td>
                <td>Age</td>
                <td colSpan={2} className='text-center'>action</td>
            </tr>
            </thead>
            <tbody>

            <tr className='h-14 text-gray-400'>
                <td className='px-2'>Ngabo Sevelin</td>
                <td className=''>Ngabo@gmail.com</td>
                <td className=''>Online dept</td>
                <td className=''>32</td>
                <td className='text-green-500 cursor-pointer uppercase '>Approve</td>
                <td className='text-red-500 cursor-pointer uppercase '>Reject</td>
            </tr>
            <tr className='h-14 text-gray-400'>
                <td className='px-2'>Imanishimwe Dous</td>
                <td className=''>dous@gmail.com</td>
                <td className=''>Code with us</td>
                <td className=''>19</td>
                <td className='text-green-500 cursor-pointer uppercase '>Approve</td>
                <td className='text-red-500 cursor-pointer uppercase '>Reject</td>
            </tr>
            </tbody>
        </table>
        </div>
      
    </div>
  )
}

export default Applicants
