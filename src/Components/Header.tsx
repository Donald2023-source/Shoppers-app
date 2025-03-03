import React from 'react'
import Container from './Container'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='w-full h-20 bg-white border-b-[1px] border-b-gray-300'>
        <Container className='h-full flex items-center justify-between lg:gap-10 gap-5'>
            <Logo />
            <div>Search Input</div>
            <div>Navbar list</div>
        </Container>
    </header>
  )
}

export default Header
