import React from 'react'
import Container from './Container'
import Logo from './Logo'
import SearchInput from './SearchInput'
import { navBarList } from '@/constants'
import Link from 'next/link'
import { HiMenuAlt2 } from 'react-icons/hi'
const Header = () => {
  return (
    <header className='w-full h-20 bg-white border-b-[1px] border-b-gray-300'>
        <Container className='h-full flex items-center justify-between lg:gap-10 gap-5'>
            <Logo />
            <SearchInput />
            <div className='hidden md:inline-flex items-center gap-7'>
                {
                    navBarList?.map((item) => (
                        <Link className='navBarItem' href={item?.link} key={item?.title}>
                            {item?.title}
                        </Link>
                    ))
                }
                <Link href={'/signin'} className='navBarItem'>Sign in</Link>

                <Link href={'/signin'} className='navBarItem'>Studio</Link>
            </div>
            <HiMenuAlt2 className='inline-flex md:hidden cursor-pointer text-2xl hover:text-orange-600' />
        </Container>
    </header>
  )
}

export default Header
