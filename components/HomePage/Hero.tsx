import React from 'react'
import heroImage from '@/public/images/hero.jpg'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

function Hero() {
  return (
    <div className='max-h-screen flex flex-col'>
        
        <Image
            src={heroImage}
            alt='Hero image'
            objectFit='cover'
            className='max-h-screen'
        />
       
    </div>
  )
}

export default Hero