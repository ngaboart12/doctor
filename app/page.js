import Footer from '@/components/Footer'
import Aboutus from '@/components/Home/AboutUs'
import Connect from '@/components/Home/Connect'
import Hero from '@/components/Home/Hero'
import Joinustoday from '@/components/Home/Joinustoday'
import UpcommingEvent from '@/components/Home/UpcommingEvent'
import Value from '@/components/Home/Value'
import WhatWeDo from '@/components/Home/WhatWeDo'
import Image from 'next/image'


export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 ">
      <Hero/>
      <Aboutus/>
      <WhatWeDo/>
      <Value/>
      <Connect/>
      <UpcommingEvent/>
      <Joinustoday/>
      <Footer/>
     
      
    </main>
  )
}
