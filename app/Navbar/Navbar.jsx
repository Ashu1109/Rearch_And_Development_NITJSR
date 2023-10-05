'use client'
import React from 'react'
import Logo from './Logo'
import Container from '../Container'
import Name from './Name'
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className='fixed w-full bg-white shadow-sm'>
    <div className='py-4 border-b-[4]'>
      <Container>
        <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
          <Logo />
          
        </div>
      </Container>
    </div>
  </div>
  )
}

export default Navbar