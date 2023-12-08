import Aboutus from '@/components/Home/AboutUs'
import Hero from '@/components/Home/Hero'
import WhatWeDo from '@/components/Home/WhatWeDo'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 ">
      <Hero/>
      <Aboutus/>
      <WhatWeDo/>
     
      
    </main>
  )
}
