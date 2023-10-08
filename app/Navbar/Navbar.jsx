'use client'
import React from 'react'
import Logo from './Logo'
import Container from '../Container'
import Name from './Name'
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className='w-full shadow-sm bg-white'>
      <div className=' py-3 border-b-[4]' >
        <Container>
          <div className='flex flex-row justify-between items-center gap-3 md:gap-0'>
            <Logo />
            <Name/>
            <Menu/> 
          </div>
        </Container>
      </div>

    </div>
  )
}

export default Navbar