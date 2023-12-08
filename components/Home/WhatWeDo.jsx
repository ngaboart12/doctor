import React from 'react'

const WhatWeDo = () => {
    const whatwedo = [
        {
            icon: "",
            head: "HIRING PROCESS",
            content: "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed."
        },
        {
            icon: "",
            head: "ONBOARDING PROCESS",
            content: "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed."
        },
        {
            icon: "",
            head: "CLOSEOUT SERVICES",
            content: "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed."
        },
        {
            icon: "",
            head: "HR MANAGEMENT ADVISORY",
            content: "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed."
        },
        {
            icon: "",
            head: "CORPPRATE TRAINNINGS ATIVITIES",
            content: "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed."
        },
    ]
  return (
    <div className='w-full px-[20px] md:px-[100px] lg:px-[180px] py-20 items-center flex bg-[#2B6490]'>
        <div className='max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14'>
            <div className='flex flex-col gap-1 items-center sm:items-start'>
                <h1 className='text-[32px] text-[#F2C300] font-[400]'>What we do</h1>
                <span className='text-white font-[600] text-[16px] text-center sm:text-start'>Elevating Businesses Through Insightful Consulting</span>
            </div>
            {whatwedo.map((item,index)=>{
                return(
                    <div key={index} className='flex flex-col gap-1 items-center sm:items-start'>
                        <div>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.611 34.5919C27.8847 34.5919 34.5919 27.8847 34.5919 19.6109C34.5919 11.3372 27.8847 4.63 19.611 4.63C11.3372 4.63 4.63005 11.3372 4.63005 19.6109C4.63005 27.8847 11.3372 34.5919 19.611 34.5919Z" stroke="#F2C300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M30.0305 30.5919L35.9039 36.45" stroke="#F2C300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h1 className='text-[20px] font-[200] text-[#F2C300]'>{item.head}</h1>
                        <span className='text-[16px] text-white font-[200] text-center sm:text-start'>{item.content}</span>
                    </div>
                )
            })}

        </div>
      
    </div>
  )
}

export default WhatWeDo
