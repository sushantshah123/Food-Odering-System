"use client";
import {useContext, useState} from "react"
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import CartIcon from "./CartIcon";
import {BsSun, BsFillMoonFill} from "react-icons/bs"
import { useMyContext } from "@/context/MyContext";
import {motion} from "framer-motion"

const NavBar: React.FC = () => {
//  const [darkMode, setDarkMode] = useState(false)
const {darkMode, setDarkMode, cart} = useMyContext()
  const user = false;
  return (
    <div className={`h-16 w-full ${darkMode? "bg-gray-900 text-slate-400" : "bg-slate-600 text-gray-800"} flex justify-between items-center px-10 text-sm`}>
      <div className="hidden md:flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* LOGO  */}
      <div className="text-2xl font-semibold">
        <Link href="/">Foodie Woodie</Link>
      </div>

      {/* MOBILE MENU  */}
      <div className="flex md:hidden justify-center items-center">
        <MobileMenu darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>

      <div className="hidden md:flex gap-3 font-medium items-center">
        <Link href="/" className="flex items-center bg-blue-300 p-1 rounded-sm">
          <img src="phone.png" alt="" width={15} height={15} className="" />
          <span className="ml-1 text-xs">9823435576</span>
        </Link>
        <div className="w-[70px] h-[28px] rounded-full bg-slate-700 flex justify-between items-center relative overflow-hidden">
          <div className="w-[30px] h-full rounded-full m-[1px] flex justify-center items-center text-[20px] cursor-pointer text-orange-500">
            <BsSun />
          </div>
          <div className="w-[30px] h-full rounded-full m-[1px] flex justify-center items-center text-[20px] cursor-pointer">
            <BsFillMoonFill />
          </div>
          <div 
          //  initial={{ opacity: 0 }}
          //  animate={{ opacity: 1 }}
          //  transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          className={`w-[26px] h-[26px] rounded-full absolute bg-gray-200 top-[1px] ${darkMode? "left-[1px]" : "right-[1px]"} flex items-center justify-center cursor-pointer`} onClick={()=>setDarkMode(!darkMode)}>
          </div>
        </div>
        {!user ? (
          <Link href="/login" className="text-xs">Login</Link>
        ) : (
          <Link href="/orders" className="text-xs">orders</Link>
        )}
        <Link href="/cart" className="text-xs">
          <CartIcon cart={cart}/>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
