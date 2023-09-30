"use client"
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import CartIcon from './CartIcon'

const NavBar = () => {
    const user = false;
  return (
    <div className='h-16 w-full bg-slate-200 flex justify-between items-center px-10'>
        <div className='hidden md:flex gap-3 text-black'>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        
        {/* LOGO  */}
        <div className='text-2xl font-semibold text-black'>
            <Link href="/">
            Foodie Woodie
            </Link>
        </div>

        {/* MOBILE MENU  */}
        <div className='flex md:hidden justify-center items-center'>
         <MobileMenu/>
        </div>

        <div className='hidden md:flex gap-3 font-medium'>
            <Link href="/" className='flex items-center bg-blue-300 p-1 rounded-sm'><img src="phone.png" alt="" width={15} height={15} className=""/>
            <span className='ml-1'>9823435576</span>
            </Link>
            {
              !user ? (
                <Link href="/login">Login</Link>
              ) :
            <Link href="/orders">orders</Link>
            }
            <Link href="/cart"><CartIcon/></Link>
        </div>
    </div>
  )
}

export default NavBar