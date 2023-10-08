'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/National_Institute_of_Technology,_Jamshedpur_Logo.png'
const Logo = () => {
  return (
    <Image src={logo}  alt="Logo" width={100} height={100} className='w-10 md:w-24'/>
  )
}

export default Logo